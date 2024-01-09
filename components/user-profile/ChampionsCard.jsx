import { kdaFunction } from "@/functions/main";
import Image from "next/image";
import Link from "next/link";
import ImageBlur from "../all/ImageBlur";

export default function ChampionsCard({ id, champions, images }) {
    let newChampions = []
    let count = 0

    champions.forEach(champion => {
        if (count < 3) {
            newChampions.push(champion)
            count += 1
        }
    });

    return (
        <div className="col-span-12 sm:col-span-4 md:me-4">
            <div className="p-5 relative bg-gray-900 border border-gray-800 shadow-lg rounded-2xl">
                <div className="text-2xl text-gray-100 font-medium leading-8">
                    Champions
                </div>
                <div className="col-span-12 sm:col-span-4 md:me-4 mt-3">
                    {newChampions.map(champion => (
                        <div className="relative bg-gray-900 rounded-2xl mb-1" key={champion.champion}>
                            <div className="flex-none sm:flex">
                                <div className="relative sm:mb-0 mb-3">
                                    <ImageBlur
                                        width={128}
                                        height={128}
                                        src={images[champion.champion] ? images[champion.champion] : "backend.avatar-paladins.webp"}
                                        alt={`${champion.champion} avatar`}
                                        classes=" w-10 h-10 object-cover rounded-xl"
                                    />
                                </div>
                                <div className="flex-auto sm:ml-5 justify-evenly">
                                    <div className="flex items-center">
                                        <div className="flex flex-col">
                                            <div className="flex text-sm text-gray-500">
                                                <div className="flex-1 inline-flex">
                                                    <div className="flex text-lg text-gray-200 font-medium leading-none mr-2">
                                                        {champion.champion}
                                                    </div>
                                                    <div className="flex text-sm text-gray-500 leading-none mt-1">
                                                        {champion.Rank} lvl
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-auto text-xs text-gray-400 my-1">
                                                <span className="mr-3">{kdaFunction(champion.Kills, champion.Assists, champion.Deaths)} kda</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Link href={`/users/${id}/champions`} className="text-sm text-blue-500">
                    Show more
                </Link>
            </div>
        </div>
    )
}