import { ranks } from "@/functions/main";

export default function RankedCard({ wins, losses, winrate, rank, leaves, points, position }) {
    const ranksV = ranks()
    
    return (
        <div className="col-span-12 sm:col-span-4">
            <div className="p-5 relative bg-gray-900 border border-gray-800 shadow-lg rounded-2xl md:me-4">
                <div className="text-2xl text-gray-100 font-medium leading-8">
                    Ranked
                </div>
                <div className="text-sm text-gray-500">
                    {ranksV[parseInt(rank)]}
                </div>
                <div className="text-base text-gray-100 font-medium leading-8">
                    Points: {points}/100 (position {position})
                </div>
                <div className="text-base text-gray-100 font-medium leading-8">
                    Win rate: {!isNaN(winrate) ? winrate : "0"}% ({wins}-{losses})
                </div>
                <div className="text-sm text-gray-500">
                    {leaves} times deserted
                </div>
            </div>
        </div>
    );
}
