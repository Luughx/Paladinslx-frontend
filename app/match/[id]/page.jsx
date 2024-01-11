import BarChart from "@/components/match/BarChart";
import UserMatchCard from "@/components/match/UserMatchCard";
import { championsImage, itemsImage } from "@/functions/main";
import Image from "next/image";
import "./page.css"
import MainCardMatch from "@/components/match/MainCardMatch";
import ImageBlur from "@/components/all/ImageBlur";

const getMatch = async (id) => {
  const { BACKEND_URI } = process.env;
  const res = await fetch(`${BACKEND_URI}/match/${id}`, {
    cache: "force-cache",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

export async function generateMetadata({ params }) {
  return {
    title: `${params.id}`,
    description: `${params.id} match`
  }
}

export default async function Home({ params }) {
  const match = await getMatch(params.id);
  const images = await championsImage();
  const items_image = await itemsImage();

  const winners = [match[0], match[1], match[2], match[3], match[4]]
  const lossers = [match[5], match[6], match[7], match[8], match[9]]

  const bans1 = [
    match[0].Ban_1,
    match[0].Ban_2,
    match[0].Ban_3,
    match[0].Ban_4,
  ]

  const bans2 = [
    match[0].Ban_5,
    match[0].Ban_6,
    match[0].Ban_7,
    match[0].Ban_8,
  ]

  return (
    <div className="container mt-4 p-4">
      <div className="text-3xl text-gray-100 font-medium leading-8 mb-4">
        {match[0].name}
      </div>

      <div className="text-center">
        <span className="text-3xl font-bold mt-4">1/4</span>
      </div>

      <div className="text-xl font-bold">Bans:</div>
      <div className="flex pt-2 text-sm text-gray-500 mr-4">
        <div className="flex-1 inline-flex items-center justify-between">
          <div className="text-sm text-gray-500">
            <div className="flex pt-2 text-sm text-gray-500 mr-4">
              <div className="flex-1 inline-flex items-center justify-between">
                {bans1.map((ban) => (
                  <div key={ban} className="mr-4">
                    <ImageBlur
                      classes="object-cover rounded-xl" //w-32 h-32
                      width={80}
                      height={80}
                      src={images[ban] ? images[ban] : "backend.avatar-paladins.webp"}
                      alt={ban}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            <div className="flex pt-2 text-sm text-gray-500A">
              <div className="flex-1 inline-flex items-center justify-between">
                {bans2.map((ban) => (
                  <div key={ban} className="mr-4">
                    <ImageBlur
                      classes="object-cover rounded-xl"
                      width={80}
                      height={80}
                      src={images[ban] ? images[ban] : "backend.avatar-paladins.webp"}
                      alt={ban}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container mt-4 mx-auto">
        <div className="flex flex-col mb-4">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-2xl">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        User
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        KDA
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Damage
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Taken
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Shielding
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Healing
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Items
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {winners.map((player) => (
                      <UserMatchCard
                        name={player.playerName}
                        id={player.playerId}
                        kills={player.Kills_Player}
                        assists={player.Assists}
                        deaths={player.Deaths}
                        damage={player.Damage_Player}
                        shielding={player.Damage_Mitigated}
                        taken={player.Damage_Taken}
                        healing={player.Healing}
                        champion={player.Reference_Name}
                        winner={true} 
                        itemsImage={items_image}
                        itemsRaw={[
                          player.Item_Active_1,
                          player.Item_Active_2,
                          player.Item_Active_3,
                          player.Item_Active_4,
                        ]}
                        key={player.playerId}
                      />
                    ))}
                    {lossers.map((player) => (
                      <UserMatchCard
                        name={player.playerName}
                        id={player.playerId}
                        kills={player.Kills_Player}
                        assists={player.Assists}
                        deaths={player.Deaths}
                        damage={player.Damage_Player}
                        shielding={player.Damage_Mitigated}
                        taken={player.Damage_Taken}
                        healing={player.Healing}
                        champion={player.Reference_Name}
                        winner={false}
                        itemsImage={items_image}
                        itemsRaw={[
                          player.Item_Active_1,
                          player.Item_Active_2,
                          player.Item_Active_3,
                          player.Item_Active_4,
                        ]}
                        key={player.playerId}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex pt-2 text-sm text-gray-200 mt-4">
          <div className="lg:flex-1 lg:inline-flex items-center justify-between">
            <div className="w-full md:w-full bg-gray-900 shadow-lg rounded-2xl p-4 md:mr-2 lg:mr-2 md:mt-0 lg:mt-0">
              <div className="p-4">
              <span className="text-xl text-gray-200 font-bold">Winners</span>
              <BarChart
              names={[
                match[0].playerName,
                match[1].playerName,
                match[2].playerName,
                match[3].playerName,
                match[4].playerName
              ]}
              damage={[
                match[0].Damage_Player,
                match[1].Damage_Player,
                match[2].Damage_Player,
                match[3].Damage_Player,
                match[4].Damage_Player
              ]}
              taken={[
                match[0].Damage_Taken,
                match[1].Damage_Taken,
                match[2].Damage_Taken,
                match[3].Damage_Taken,
                match[4].Damage_Taken
              ]}
              healing={[
                match[0].Healing,
                match[1].Healing,
                match[2].Healing,
                match[3].Healing,
                match[4].Healing
              ]}
              shielding={[
                match[0].Damage_Mitigated,
                match[1].Damage_Mitigated,
                match[2].Damage_Mitigated,
                match[3].Damage_Mitigated,
                match[4].Damage_Mitigated
              ]}
              />
              </div>
            </div>
            <div className="w-full md:w-full bg-gray-900 shadow-lg rounded-2xl p-4 md:ml-2 lg:ml-2 mt-4 md:mt-0 lg:mt-0">
              <div className="p-4">
              <span className="text-xl text-gray-200 font-bold">Losers</span>
                <BarChart 
                names={[
                  match[5].playerName,
                  match[6].playerName,
                  match[7].playerName,
                  match[8].playerName,
                  match[9].playerName,
                ]}
                damage={[
                  match[5].Damage_Player,
                  match[6].Damage_Player,
                  match[7].Damage_Player,
                  match[8].Damage_Player,
                  match[9].Damage_Player,
                ]}
                taken={[
                  match[5].Damage_Taken,
                  match[6].Damage_Taken,
                  match[7].Damage_Taken,
                  match[8].Damage_Taken,
                  match[9].Damage_Taken,
                ]}
                healing={[
                  match[5].Healing,
                  match[6].Healing,
                  match[7].Healing,
                  match[8].Healing,
                  match[9].Healing,
                ]}
                shielding={[
                  match[5].Damage_Mitigated,
                  match[6].Damage_Mitigated,
                  match[7].Damage_Mitigated,
                  match[8].Damage_Mitigated,
                  match[9].Damage_Mitigated,
                ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
