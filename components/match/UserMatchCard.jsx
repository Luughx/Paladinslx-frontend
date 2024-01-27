import { championsImage, kdaFunction, ranks } from "@/functions/main"
import Link from "next/link"
import Image from "next/image";
import ImageBlur from "../all/ImageBlur";
import ImagesItems from "./ImagesItems";

export default async function UserMatchCard({ name, tier, id, kills, assists, deaths, damage, shielding, taken, healing, winner, champion, itemsRaw, itemsImage, platform, teams }) {
    const images = await championsImage()
    const items = itemsRaw.filter(item => item[0] != "")
    const ranksobject = ranks()

    let colors = {}
    if (winner) {
        colors = {
            team1: "border-cyan-600",
            team2: "border-indigo-600",
            team3: "border-blue-300",
            team4: "border-teal-400"
        }
    } else {
        colors = {
            team1: "border-rose-500",
            team2: "border-violet-700",
            team3: "border-fuchsia-500",
            team4: "border-pink-500"
        }
    }

    let styleTeam = ""

    if (teams[id]) {
        styleTeam = `border-l-2 ${colors[teams[id]]}`
    }

    return (
        <tr className={`${winner ? "bg-sky-900" : "bg-red-900"} divide-gray-700`}>
            <td className={`px-4 py-4 text-sm text-gray-300 whitespace-nowrap ${styleTeam}`}>
                <Link href={`${platform ? "/users/" + id + "/profile" : "/"}`} className="flex items-center gap-x-6">
                    <div className="relative inline-block shrink-0 rounded-2xl me-3">
                        <ImageBlur
                            width={70}
                            height={70}
                            classes={`object-cover rounded-xl w-32px h-32px inline-block shrink-0
                                border-2
                                ${tier === 0 ? "border-gray-900" : ""}
                                ${tier > 0 && tier < 6 ? "border-orange-900" : ""}
                                ${tier > 5 && tier < 11 ? "border-gray-500" : ""}
                                ${tier > 10 && tier < 16 ? "border-yellow-600" : ""}
                                ${tier > 15 && tier < 21 ? "border-purple-700" : ""}
                                ${tier > 20 && tier < 26 ? "border-blue-600" : ""}
                                ${tier === 26 ? "border-emerald-500" : ""}
                                ${tier === 27 ? "border-rose-600" : ""}`}
                            src={images[champion] ? images[champion] : "backend.avatar-paladins.webp"}
                            alt={champion}
                        />
                    </div>
                    <div>
                        <div>
                            {name}
                        </div>
                        <div className="text-xs text-gray-500">
                            {ranksobject[tier]}
                        </div>
                    </div>
                </Link>
            </td>
            <td className="py-4 text-sm font-medium text-gray-300 whitespace-nowrap gap-x-2">
                {kills}/{deaths}/{assists} ({kdaFunction(kills, assists, deaths)} kda)
            </td>
            <td className="py-4 text-sm text-gray-300 whitespace-nowrap gap-x-2">
                {damage}
            </td>
            <td className="py-4 text-sm text-gray-300 whitespace-nowrap gap-x-2">
                {taken}
            </td>
            <td className=" py-4 text-sm text-gray-300 whitespace-nowrap gap-x-2">
                {shielding}
            </td>
            <td className=" py-4 text-sm text-gray-300 whitespace-nowrap gap-x-2">
                {healing}
            </td>
            <td className="py-4 text-sm text-gray-300 whitespace-nowrap gap-x-2">
                <div className="flex items-center gap-x-6">
                    <div className="flex inline-flex shrink-0 rounded-2xl me-3">
                        {items.map(item => (
                            <ImagesItems  
                            images={itemsImage}
                            image={item[0]}
                            level={item[1]}
                            key={item[0]} />
                        ))}
                    </div>
                </div>
            </td>
        </tr>
    )
}