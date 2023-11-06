import CasualCard from "@/components/user-profile/CasualCard";
import HistoryCard from "@/components/user-profile/HistoryCard";
import MainCard from "@/components/user-profile/MainCard";
import RankedCard from "@/components/user-profile/RankedCard";
import Link from "next/link";
import { championsImage } from "@/functions/main";

export const metadata = {
  title: "Paladins",
  description: "...",
};

const getPlayer = async (id) => {
  const { BACKEND_URI } = process.env;
  const res = await fetch(`${BACKEND_URI}/users/${id}/stats`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

const getMatchs = async (id) => {
  const { BACKEND_URI } = process.env;
  const res = await fetch(`${BACKEND_URI}/users/${id}/matchs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json()
};

export default async function Home({ params }) {
  const player = await getPlayer(params.id)
  const matchs = await getMatchs(params.id)
  const winrate = (player.Wins * 100) / (player.Wins + player.Losses);
  const winrateRankedPc = (player.RankedKBM.Wins * 100) / (player.RankedKBM.Wins + player.RankedKBM.Losses);
  const images = await championsImage()

  return (
    <div className="mt-4">
      <div className="flex flex-col min-h-screen">
        <div className="container mt-4">
          <div className="max-w-4xl w-full mx-auto grid gap-4 grid-cols-1">
            <MainCard
              name={player.Name}
              id={player.Id}
              losses={player.Losses}
              wins={player.Wins}
              winrate={winrate.toFixed(2)}
              rank={player.RankedKBM.Tier}
              avatar={player.AvatarURL}
              lastTime={player.Last_Login_Datetime}
              level={player.Level}
              title={player.Title}
              hoursPlayed={player.HoursPlayed}
              region={player.Region}
            />
            <div className="grid grid-cols-12 form-4 ">
              <RankedCard
                wins={player.RankedKBM.Wins}
                losses={player.RankedKBM.Losses}
                winrate={winrateRankedPc.toFixed(2)}
                rank={player.RankedKBM.Tier}
                leaves={player.RankedKBM.Leaves}
                points={player.RankedKBM.Points}
                position={player.RankedKBM.Rank}

              />
              <CasualCard 
              wins={player.Wins}
              losses={player.Losses}
              winrate={winrate.toFixed(2)}
              leaves={player.Leaves}
              />
              <CasualCard 
              wins={player.Wins}
              losses={player.Losses}
              winrate={winrate.toFixed(2)}
              leaves={player.Leaves}
              />
            </div>
            <div>
            <div className="flex flex-col sticky top-0 z-10">
                <div className="bg-gray-900 border border-gray-800 shadow-lg  rounded-2xl p-4">
                  <div className="text-2xl text-gray-100 font-medium leading-8">
                      Matchs
                  </div>
                </div>
              {matchs.map(match => (
                <Link href={`/match/${match.Match}`} className="bg-gray-900 border border-gray-800 shadow-lg rounded-2xl p-4" key={match.Match}>
                  <HistoryCard 
                  id={match.Match}
                  champion={match.Champion}
                  images={images}
                  region={match.Region}
                  win_status={match.Win_Status}
                  queue={match.Queue}
                  map={match.Map_Game}
                  team1score={match.Team1Score}
                  team2score={match.Team2Score}
                  kills={match.Kills}
                  deaths={match.Deaths}
                  assists={match.Assists}
                  minutes={match.Minutes}
                  />
                </Link>
              ))}
            </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
