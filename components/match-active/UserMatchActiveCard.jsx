import { championsImage, kdaFunction, ranks } from "@/functions/main"
import Link from "next/link"
import Image from "next/image";
import ImageBlur from "../all/ImageBlur";

export default async function UserMatchActiveCard({ players, images }) {
    const ranksDictionary = ranks()
    
    return (
        <tr className={`bg-gray-900`}>
            {players.map(player => (
                <td
                    className={`p-4 text-gray-500 dark:text-gray-300 whitespace-nowrap`}
                    key={player.ChampionId}>
                    <div className="flex flex-col justify-center items-center">
                        <div className={`relative inline-block shrink-0 rounded-2xl `}>
                            <ImageBlur
                                width={70}
                                height={70}
                                classes={`object-cover rounded-lg w-32px a inline-block shrink-0 
                                border-2
                                ${player.Tier === 0 ? "border-gray-900" : ""}
                                ${player.Tier > 0 && player.Tier < 6 ? "border-orange-900" : ""}
                                ${player.Tier > 5 && player.Tier < 11 ? "border-gray-500" : ""}
                                ${player.Tier > 10 && player.Tier < 16 ? "border-yellow-600" : ""}
                                ${player.Tier > 15 && player.Tier < 21 ? "border-purple-700" : ""}
                                ${player.Tier > 20 && player.Tier < 26 ? "border-blue-600" : ""}
                                ${player.Tier === 26 ? "border-emerald-500" : ""}
                                ${player.Tier === 27 ? "border-rose-600" : ""}`}
                                src={images[player.ChampionName] ? images[player.ChampionName] : "backend.avatar-paladins.webp"}
                                alt={player.ChampionName}
                            />
                        </div>
                        <Link href={`/users/${player.playerId}/profile`} className="mt-1 text-sm font-bold line-clamp-2">
                            <span className={``}>
                                {player.playerName}
                            </span>
                        </Link>
                        <div className="text-sm text-gray-500">
                            {ranksDictionary[player.Tier]}
                        </div>
                        <div className="mt-1 text-sm">
                            {player.tierWins} - {player.tierLosses} ({((player.tierWins * 100) / (player.tierWins + player.tierLosses)).toFixed(1)}%)
                        </div>
                    </div>
                </td>
            ))}
        </tr>
    )
}