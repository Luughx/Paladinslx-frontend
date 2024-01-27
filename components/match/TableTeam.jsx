import UserMatchCard from "./UserMatchCard";

export default function TableTeam({ players, itemsImage, winner }) {
    return (
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
                {players.map(player => (
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
                    itemsImage={itemsImage}
                    itemsRaw={[
                      player.Item_Active_1,
                      player.Item_Active_2,
                      player.Item_Active_3,
                      player.Item_Active_4,
                    ]}
                    platform={player.Platform}
                    key={player.playerId}
                  />
                ))}
            </tbody>
        </table>
    )
}