import { ranks } from "@/functions/main"
import Image from "next/image";
import ImageBlur from "../all/ImageBlur";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp, faFire } from "@fortawesome/free-solid-svg-icons";

export default async function MainCard({ name, id, wins, losses, winrate, rank, avatar, lastTime, level, title, hoursPlayed, region, status }) {
    const ranksData = ranks()
    const states = {
        0: "bg-gray-400", // Offline
        1: "bg-green-400", // Online, en lobby
        2: "bg-amber-400", // En seleccion
        3: "bg-yellow-500", // current
        4: "bg-gray-400", // ???
        5: "bg-gray-400", // Player not found
        6: "bg-gray-400", // ???
        7: "bg-gray-400", // ???
    }

    return (
        <div className="flex flex-col top-0 z-10">
            <div className="bg-gray-900 border border-gray-800 shadow-lg rounded-2xl p-5">
                <div className="flex-none sm:flex">
                    <div className="relative h-32 w-32 sm:mb-0 mb-3 rounded-2xl">
                        <ImageBlur
                            width={128}
                            height={128}
                            src={avatar ? avatar : "backend.avatar-paladins.webp"}
                            alt={`${name} avatar`}
                            classes={"w-32 h-32 object-cover rounded-2xl"}
                        />
                        <i className={`absolute -right-2 bottom-2 -ml-3 p-1 text-xs font-medium tracking-wider rounded-full ${states[status]}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"></svg>
                        </i>
                    </div>
                    <div className="flex-auto sm:ml-5 justify-evenly">
                        <div className="flex items-center sm:mt-2">
                            <div className="flex items-center">
                                <div className="flex flex-col">
                                    <div className="flex pt-2 text-sm text-gray-500">
                                        <div className="flex-1 inline-flex">
                                            <div className="flex text-xl text-gray-200 font-bold leading-none mr-2">
                                                {name} {title ? `(${title})` : ""}
                                            </div>
                                            <div className="flex text-sm text-gray-500 leading-none mt-1">
                                                {region}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-auto text-gray-400 my-1">
                                        <span className="mr-3">{level} level</span>
                                        <span className="mr-3 border-r border-gray-600 max-h-0"></span>
                                        <span>{ranksData[parseInt(rank)]}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex pt-2 text-sm text-gray-400">
                            <div className="flex-1 inline-flex items-center">
                                <FontAwesomeIcon className="h-5 w-5 mr-1" icon={faArrowDown} />
                                <p className="">{losses} Losses</p>
                            </div>
                            <div className="flex-1 inline-flex items-center">
                                <FontAwesomeIcon className="h-5 w-5 mr-1" icon={faArrowUp} />
                                <p className="">{wins} Wins</p>
                            </div>
                            <div className="flex-1 inline-flex items-center">
                                <FontAwesomeIcon className="h-5 w-5 mr-1" icon={faFire} />
                                <p className="">{!isNaN(winrate) ? winrate : "0"} %</p>
                            </div>
                        </div>
                        <div className="flex pt-2 text-sm text-gray-500 mr-4">
                            <div className="flex-1 inline-flex items-center justify-between">
                                <div className="text-sm text-gray-500">
                                    {lastTime}
                                </div>
                                <div className="text-sm text-gray-500">
                                    {hoursPlayed} hours
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
