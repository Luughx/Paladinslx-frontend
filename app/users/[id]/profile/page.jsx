import CasualCard from "@/components/user-profile/CasualCard";
import HistoryCard from "@/components/user-profile/HistoryCard";
import MainCard from "@/components/user-profile/MainCard";
import RankedCard from "@/components/user-profile/RankedCard";
import Link from "next/link";
import { championsImage } from "@/functions/main";
import ChampionsCard from "@/components/user-profile/ChampionsCard";
import WarnCurrentCard from "@/components/user-profile/WarnCurrentCard";

const getPlayer = async (id) => {
  const { BACKEND_URI } = process.env;
  const res = await fetch(`${BACKEND_URI}/users/${id}/stats`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json()
}

const getChampions = async (id) => {
  const { BACKEND_URI } = process.env;
  const res = await fetch(`${BACKEND_URI}/users/${id}/champions`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json()
}

const getMatchs = async (id) => {
  const { BACKEND_URI } = process.env;
  const res = await fetch(`${BACKEND_URI}/users/${id}/matchs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json()
}

const getStatus = async (id) => {
  const { BACKEND_URI } = process.env;
  const res = await fetch(`${BACKEND_URI}/users/${id}/status`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json()
}

export async function generateMetadata({ params }) {
  const player = await getPlayer(params.id)

  return {
    title: `${player.Name}`,
    description: `${player.Name} profile`
  }
}

export default async function Home({ params }) {
  const player = await getPlayer(params.id)
  const matchs = await getMatchs(params.id)
  const winrate = (player.Wins * 100) / (player.Wins + player.Losses);
  const winrateRankedPc = (player.RankedKBM.Wins * 100) / (player.RankedKBM.Wins + player.RankedKBM.Losses);
  const images = await championsImage()
  const status = await getStatus(params.id)
  const champions = await getChampions(params.id)

  let currentDefault = false
  if (status.status === 3) {
    currentDefault = true
  }

  let hasMatchs = true
  if (matchs.length === 1 && matchs[0].playerId === 0) {
    hasMatchs = false
  }

  return (
    <div className="mt-4">
      <div className="flex flex-col min-h-screen">
        <div className="container mt-4">
          <div className="max-w-4xl w-full mx-auto grid gap-4 grid-cols-1">
            {currentDefault && <WarnCurrentCard 
              status={status}
              id={player.Id}
              name={player.Name}
              currentDefault={currentDefault}
            />}
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
              status={status.status}
            />
            <div className="grid grid-cols-12 form-4">
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
              <ChampionsCard
                id={player.Id}
                champions={champions}
                images={images}
              />
            </div>
            <div>
              <div className="flex flex-col sticky top-0 z-10">
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <div className="text-2xl text-gray-100 font-medium leading-8">
                    Matchs
                  </div>
                </div>
                {!hasMatchs && <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <div className="text-xl text-gray-300">
                    This user has no recent matchs
                  </div>
                </div>}
                {hasMatchs && matchs.map(match => (
                  <Link href={`/match/${match.Match}`} className="bg-gray-900 border border-gray-800 shadow-lg rounded-2xl p-5" key={match.Match}>
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
