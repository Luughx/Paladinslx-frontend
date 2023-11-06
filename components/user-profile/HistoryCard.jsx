import { kdaFunction } from "@/functions/main";
import Link from "next/link";

export default async function HistoryCard({ id, champion, images, win_status, queue, map, region, team1score, team2score, kills, assists, deaths, minutes }) {
    let firstScore = 0
    let secondScore = 0
    if (team1score > team2score && win_status == "Win") {
        firstScore = team1score
        secondScore = team2score
    } else if (team1score < team2score && win_status == "Win") {
        firstScore = team2score
        secondScore = team1score
    } else if (team1score < team2score && win_status != "Win") {
        firstScore = team1score
        secondScore = team2score
    } else if (team1score > team2score && win_status != "Win") {
        firstScore = team2score
        secondScore = team1score
    }

    return (
        <div>
            <div className="flex-none sm:flex">
                <div className=" relative h-32 w-32 sm:mb-0 mb-3">
                    <img
                        src={images[champion]}
                        alt={`${champion} avatar`}
                        className=" w-32 h-32 object-cover rounded-2xl"
                    />
                </div>
                <div className="flex-auto sm:ml-5">
                    <div className="flex">
                        <div className="flex-1 inline-flex items-center justify-between">
                            <div className="flex pt-2 text-sm text-gray-500">
                                <div className="flex-1 inline-flex">
                                    <div className={`${win_status == "Win" ? "text-sky-400" : "text-red-400"} text-xl text-gray-200 font-bold leading-none mr-2`}>
                                        {queue}
                                    </div>
                                    <div className=" text-sm text-gray-500 leading-none mt-1">
                                        {region}
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-2 text-sm text-gray-500">
                                <div className={`text-xl text-gray-200 font-bold leading-none mr-4`}>
                                    {firstScore}/{secondScore}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-auto text-gray-200 my-1">
                        <span className="mr-3">{kills}/{assists}/{deaths} ({kdaFunction(kills, assists, deaths)} kda)</span>
                        <span className="mr-3 border-r border-gray-600 max-h-0"></span>
                        <span>{id}</span>
                    </div>
                    <div className="text-gray-500 my-1">
                        <span>{map}</span>
                    </div>
                    <div className="flex pt-2 text-sm text-gray-500 mr-4">
                        <div className="flex-1 inline-flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                                {id}
                            </div>
                            <div className="text-sm text-gray-500">
                                {minutes} min
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
