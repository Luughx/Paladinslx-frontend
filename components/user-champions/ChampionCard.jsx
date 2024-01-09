"use client"
import { kdaFunction } from "@/functions/main";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

export default function ChampionCard({ champion, championsDefault, images, loadoutsDefault }) {
    const [activeLoadout, setLoadout] = useState(false)
    const [loading, setLoading] = useState(false)
    const [firstCards, setFirstCards] = useState(false)
    const [cardsImage, setCardsImage] = useState({})
    const [cardsDescription, setCardsDescription] = useState({})

    const [activeHover, setActiveHover] = useState(false)
    const [imageHover, setImageHover] = useState("/avatar-paladins.png")
    const [titleHover, setTitleHover] = useState("")
    const [descriptionHover, setDescriptionHover] = useState("")
    const [pointsHover, setPointsHover] = useState(0)
    const [colorHover, setColorHover] = useState("")
    const [activeError, setError] = useState(false)

    let championDefault = {}
    let loadouts = []
    let cards = []

    championsDefault.forEach(champ => {
        if (champion.champion === champ.Name)
            championDefault = champ
    })

    loadoutsDefault.forEach(load => {
        if (champion.champion === load.ChampionName)
            loadouts.push(load)
    })

    let kda = champion.Deaths != 0 ? ((champion.Kills + (champion.Assists / 2)) / champion.Deaths).toFixed(2) : (champion.Kills + (champion.Assists / 2)).toFixed(2)

    let colorKda = ""

    if (kda < 1) colorKda = "text-red-400"
    else if (kda > 1.5) colorKda = "text-sky-400"
    else colorKda = ""

    function changeActive() {
        if (activeLoadout) setLoadout(false)
        else {
            if (firstCards) {
                setLoadout(true)
            } else {
                setLoading(true)
                fetch(`http://localhost:3000/api/champions/${parseInt(champion.champion_id)}/cards`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }).then(res => res.json()).then(data => {
                    cards = data
                    let temporalImages = {}
                    let temporalDescription = {}
                    cards.forEach(card => {
                        temporalImages[card.card_id2] = [card.championCard_URL, card.blurUrl]
                        temporalDescription[card.card_id2] = card.card_description
                    })

                    setCardsImage(temporalImages)
                    setCardsDescription(temporalDescription)
                    setLoadout(true)
                    setLoading(false)

                }).catch(err => {
                    console.log("Error: " + err)
                    setLoading(false)
                    setError(true)
                })
                setFirstCards(true)
            }
        }
    }

    function clickCard(card) {
        const imageUrl = cardsImage[card.ItemId][0] ? cardsImage[card.ItemId][0] : "/avatar-paladins.png"
        const imageBlurUrl = cardsImage[card.ItemId][1] ? cardsImage[card.ItemId][1] : "/avatar-paladins.png"

        setActiveHover(true)
        setImageHover([imageUrl, imageBlurUrl])
        setTitleHover(card.ItemName)
        setPointsHover(card.Points)

        const temporalDescription = cardsDescription[card.ItemId]

        const value = temporalDescription.match(/\{(.*)\}/)
        const equalDivided = value[1].split("=")
        const number = equalDivided[1].split("|")
        const descriptionFixed = temporalDescription.replace(value[0], `${(number[1] * card.Points).toFixed(1)}`)

        setDescriptionHover(descriptionFixed)

        if (card.Points === 1) setColorHover("border-gray-100")
        if (card.Points === 2) setColorHover("border-lime-600")
        if (card.Points === 3) setColorHover("border-cyan-600")
        if (card.Points === 4) setColorHover("border-purple-600")
        if (card.Points === 5) setColorHover("border-yellow-500")
    }

    function clickCloseError() {
        setError(false)
        setLoading(false)
    }

    return (
        <div>
            <div className="bg-gray-900 border border-gray-800 shadow-lg rounded-2xl pr-5 pl-5 pt-5">
                <div className="flex-none sm:flex">
                    <div className=" relative h-32 w-32 sm:mb-0 mb-3">
                        <Image
                            width={128}
                            height={128}
                            src={images[champion.champion] ? images[champion.champion] : "/avatar-paladins.webp"}
                            alt={`avatar`}
                            className="w-32 h-32 object-cover rounded-2xl"
                        />
                    </div>
                    <div className="flex-auto sm:ml-5">
                        <div className="flex">
                            <div className="flex-1 inline-flex items-center justify-between">
                                <div className="flex pt-2 text-sm text-gray-500">
                                    <div className="flex-1 inline-flex">
                                        <div className={`text-xl text-gray-200 font-bold leading-none mr-2`}>
                                            {champion.champion}
                                        </div>
                                        <div className=" text-sm text-gray-500 leading-none mt-1">
                                            {champion.Rank} lvl
                                        </div>
                                    </div>
                                </div>
                                <div className="flex pt-2 text-sm text-gray-500">
                                    <div className={`text-xl text-gray-200 font-bold leading-none mr-4`}>
                                        {(champion.Minutes / 60).toFixed(1)} h
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-auto text-gray-200 my-1">
                            <span className={`mr-3 ${colorKda}`}>{champion.Kills} / {champion.Assists} / {champion.Deaths}</span>
                            <span className="mr-3 border-r border-gray-600 max-h-0"></span>
                            <span className={colorKda}>{kda} kda</span>
                        </div>
                        <div className="text-gray-500 my-1">
                            <span></span>
                        </div>
                        <div className="flex pt-2 text-sm text-gray-500 mr-4">
                            <div className="flex-1 inline-flex items-center justify-between">
                                <div className="text-sm text-gray-500">
                                    {champion.LastPlayed}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mb-1">
                    <button onClick={() => changeActive()} className="cursor-pointer text-gray-600">
                        <FontAwesomeIcon icon={activeLoadout ? faChevronUp : faChevronDown} />
                    </button>
                </div>
            </div>
            <div className={`flex justify-center mt-2 mb-3 ${loading ? "" : "hidden"}`}>
                <div role="status">
                    <svg aria-hidden="true" className="w-7 h-7 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            <div className={`bg-gray-900 border mt-1 mb-2 border-red-900 shadow-lg rounded-2xl p-4 ${activeError ? "" : "hidden"}`}>
                <div className="grid grid-cols-2">
                    <div className="text-base text-gray-100 font-medium">
                        An error has appeared
                    </div>
                    <div className="text-right text-gray-500 mr-2">
                        <span></span>
                        <span className="cursor-pointer" onClick={() => clickCloseError()}>
                            x
                        </span>
                    </div>
                </div>
            </div>
            <div className={`mb-4 container duration-300 ${activeLoadout && !loading ? "" : "hidden"}`}>
                <div className="max-w-5xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {loadouts.map(loadout => (
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1" key={loadout.DeckId}>
                            <div className="bg-gray-900 p-1 rounded-2xl shadow-sm border-gray-800">
                                <div className="flex-none sm:flex">
                                    <div className="flex-auto sm:ml-5 justify-evenly">
                                        <div className="flex items-center sm:mt-2">
                                            <div className="flex items-center">
                                                <div className="flex flex-col">
                                                    <div className="flex pt-2 text-sm text-gray-500">
                                                        <div className="flex-1 inline-flex">
                                                            <div className="flex text-xl text-gray-200 font-bold leading-none mr-2">
                                                                {loadout.DeckName}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {activeLoadout && !loading && <div className="flex-auto text-gray-400 my-1 mt-5">
                                            <div className="flex flex-col">
                                                <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-4 mb-5 mr-4">
                                                    {loadout.LoadoutItems.map(card => (
                                                        <div key={card.ItemId} onClick={() => clickCard(card)}>
                                                            <div className={`cursor-pointer h-[110px] rounded-md hover:border-2 transition-colors duration-300
                                                            p-1
                                                            border
                                                            ${card.Points === 1 ? "border-gray-100" : ""}
                                                            ${card.Points === 2 ? "border-lime-600" : ""}
                                                            ${card.Points === 3 ? "border-cyan-600" : ""}
                                                            ${card.Points === 4 ? "border-purple-600" : ""}
                                                            ${card.Points === 5 ? "border-yellow-500" : ""}
                                                            `}>
                                                                <div>
                                                                    <Image
                                                                        src={cardsImage[card.ItemId][0] ? cardsImage[card.ItemId][0] : "/avatar-paladins.webp"}
                                                                        height={100}
                                                                        width={100}
                                                                        alt={card.ItemId}
                                                                        className="object-cover rounded-md"
                                                                        placeholder="blur"
                                                                        blurDataURL={cardsImage[card.ItemId][1]}
                                                                    />
                                                                </div>
                                                                <div className="text-sm line-clamp-2 text-center mt-1">
                                                                    {card.ItemName}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={activeHover ? "" : "hidden"}>
                <div className="flex fixed justify-center items-center backdrop-blur-sm inset-0 z-50" onClick={() => setActiveHover(false)}>
                    <div className={`bg-gray-900 p-4 border w-[300px] rounded-2xl ${colorHover}`} onClick={() => console.log("click carta")}>
                        <div className="text-right text-gray-500 cursor-pointer" onClick={() => setActiveHover(false)}>
                            <span>x</span>
                        </div>
                        <div className="w-full p-2">
                            <Image
                                src={imageHover[0]}
                                height={128}
                                width={98}
                                alt={"12312"}
                                className="w-full object-cover rounded-xl"
                                placeholder="blur"
                                blurDataURL={imageHover[1]}
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center text-center mb-6">
                            <div className="text-xl font-bold">
                                {titleHover}
                            </div>
                            <div className="text-md text-gray-300 mb-6 line-clamp-2">
                                {descriptionHover}
                            </div>
                        </div>
                        <div className={``}>
                            <span className="text-xl font-bold">
                                {pointsHover}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}