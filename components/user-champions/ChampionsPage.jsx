"use client"
import ChampionCard from "@/components/user-champions/ChampionCard";
import { useState } from "react";
import { faArrowLeft, faBorderAll, faCat, faHatWizard, faHeart, faShield, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ChampionsPage({ params, champions, championsDefault, images, loadouts, championsFrontline, championsSupport, championsDamage, championsFlank }) {
    const [activeCategory, setCategory] = useState(0)

    function changeChampions(value) {
        setCategory(value)
    }

    return (
        <div className="mt-4">
            <div className="max-w-4xl w-full mx-auto grid gap-4 grid-cols-1">
                <div>
                    <Link href={`/users/${params.id}/profile`}>
                        <FontAwesomeIcon className="cursor-pointer text-2xl text-gray-600" icon={faArrowLeft} />
                    </Link>
                </div>
                <div className="flex flex-col min-h-screen">
                    <div className="container">
                        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-4 mb-5">
                            <div onClick={() => changeChampions(0)} className="bg-gray-900 text-gray-600 border border-gray-800 shadow-lg rounded-2xl p-5 cursor-pointer text-center hover:border-gray-900 hover:border-2 transition-colors duration-300">
                                <FontAwesomeIcon className="text-6xl" icon={faBorderAll} />
                                <div className="font-bold">All</div>
                            </div>
                            <div onClick={() => changeChampions(1)} className="bg-gray-900 text-gray-600 border border-gray-800 shadow-lg rounded-2xl p-5 cursor-pointer text-center hover:border-gray-900 hover:border-2 transition-colors duration-300">
                                <FontAwesomeIcon className="text-6xl text-gray-600" icon={faShieldHalved} />
                                <div className="font-bold">Frontline</div>
                            </div>
                            <div onClick={() => changeChampions(2)} className="bg-gray-900 text-gray-600 border border-gray-800 shadow-lg rounded-2xl p-5 cursor-pointer text-center hover:border-gray-900 hover:border-2 transition-colors duration-300">
                                <FontAwesomeIcon className="text-6xl text-gray-600" icon={faHeart} />
                                <div className="font-bold">Support</div>
                            </div>
                            <div onClick={() => changeChampions(3)} className="bg-gray-900 text-gray-600 border border-gray-800 shadow-lg rounded-2xl p-5 cursor-pointer text-center hover:border-gray-900 hover:border-2 transition-colors duration-300">
                                <FontAwesomeIcon className="text-6xl text-gray-600" icon={faHatWizard} />
                                <div className="font-bold">Damage</div>
                            </div>
                            <div onClick={() => changeChampions(4)} className="bg-gray-900 text-gray-600 border border-gray-800 shadow-lg rounded-2xl p-5 cursor-pointer text-center hover:border-gray-900 hover:border-2 transition-colors duration-300">
                                <FontAwesomeIcon className="text-6xl text-gray-600" icon={faCat} />
                                <div className="font-bold">Flank</div>
                            </div>
                        </div>
                        <div className={`${activeCategory === 0 ? "" : "hidden"}`}>
                            {champions.map(champion => (
                                <div key={champion.champion}>
                                    <ChampionCard
                                        champion={champion}
                                        championsDefault={championsDefault}
                                        images={images}
                                        loadoutsDefault={loadouts}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className={`${activeCategory === 1 ? "" : "hidden"}`}>
                            {championsFrontline.map(champion => (
                                <div key={champion.champion}>
                                    <ChampionCard
                                        champion={champion}
                                        championsDefault={championsDefault}
                                        images={images}
                                        loadoutsDefault={loadouts}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className={`${activeCategory === 2 ? "" : "hidden"}`}>
                            {championsSupport.map(champion => (
                                <div key={champion.champion}>
                                    <ChampionCard
                                        champion={champion}
                                        championsDefault={championsDefault}
                                        images={images}
                                        loadoutsDefault={loadouts}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className={`${activeCategory === 3 ? "" : "hidden"}`}>
                            {championsDamage.map(champion => (
                                <div key={champion.champion}>
                                    <ChampionCard
                                        champion={champion}
                                        championsDefault={championsDefault}
                                        images={images}
                                        loadoutsDefault={loadouts}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className={`${activeCategory === 4 ? "" : "hidden"}`}>
                            {championsFlank.map(champion => (
                                <div key={champion.champion}>
                                    <ChampionCard
                                        champion={champion}
                                        championsDefault={championsDefault}
                                        images={images}
                                        loadoutsDefault={loadouts}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}