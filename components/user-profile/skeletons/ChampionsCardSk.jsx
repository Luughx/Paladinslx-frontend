export default function ChampionsCardSk() {
    return (
        <div className="col-span-12 sm:col-span-4 ">
            <div className="p-5 relative bg-gray-900 border border-gray-800 shadow-lg rounded-2xl md:me-4">
                <div className="h-5 w-20 bg-slate-700 flex animate-pulse"></div>
                <div className="col-span-12 sm:col-span-4 md:me-4 mt-3">
                    {[...Array(3).keys()].map(i => (
                        <div className="relative bg-gray-900 rounded-2xl mb-1" key={i}>
                            <div className="flex-none sm:flex animate-pulse">
                                <div className="relative sm:mb-0 mb-3">
                                    <div className="text-center relative w-10 h-10 bg-slate-700 sm:mb-0 mb-3 rounded-xl"></div>
                                </div>
                                <div className="flex-auto sm:ml-5 justify-evenly animate-pulse">
                                    <div className="flex items-center">
                                        <div className="flex flex-col">
                                            <div className="flex text-sm text-gray-500">
                                                <div className="flex-1 inline-flex">
                                                    <div className="h-3 w-16 bg-slate-700 flex mr-1"></div>
                                                    <div className="h-2 w-5 bg-slate-700 flex mt-1"></div>
                                                </div>
                                            </div>
                                            <div className="flex-auto text-xs text-gray-400 my-1">
                                                <div className="mr-3 h-2 w-10 bg-slate-700 flex mt-3 animate-pulse"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="h-4 w-16 bg-slate-700 flex mt-3 animate-pulse"></div>
            </div>
        </div>
    )
}