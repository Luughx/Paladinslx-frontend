function ranksFunction() {
    return {
        0: "Unranked",
        1: "Bronze V",
        2: "Bronze IV",
        3: "Bronze III",
        4: "Bronze II",
        5: "Bronze I",
        6: "Silver V",
        7: "Silver IV",
        8: "Silver III",
        9: "Silver II",
        10: "Silver I",
        11: "Gold V",
        12: "Gold IV",
        13: "Gold III",
        14: "Gold II",
        15: "Gold I",
        16: "Platinum V",
        17: "Platinum IV",
        18: "Platinum III",
        19: "Platinum II",
        20: "Platinum I",
        21: "Diamond V",
        22: "Diamond IV",
        23: "Diamond III",
        24: "Diamond II",
        25: "Diamond I",
        26: "Master",
        27: "Grand Master"
    }
}

export default function RankedCard({ wins, losses, winrate, rank, leaves, points, position }) {
    const ranks = ranksFunction()
    
    return (
        <div className="col-span-12 sm:col-span-4 me-4">
            <div className="p-4 relative  bg-gray-900 border border-gray-800 shadow-lg  rounded-2xl">
                <div className="text-2xl text-gray-100 font-medium leading-8">
                    Ranked
                </div>
                <div className="text-sm text-gray-500">
                    {ranks[parseInt(rank)]}
                </div>
                <div className="text-base text-gray-100 font-medium leading-8">
                    Points: {points}/100 (position {position})
                </div>
                <div className="text-base text-gray-100 font-medium leading-8">
                    Win rate: {winrate}% ({wins}-{losses})
                </div>
                <div className="text-sm text-gray-500">
                    {leaves} times deserted
                </div>
            </div>
        </div>
    );
}
