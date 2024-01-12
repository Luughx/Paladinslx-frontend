import CasualCardSk from "@/components/user-profile/skeletons/CasualCardSk";
import ChampionsCardSk from "@/components/user-profile/skeletons/ChampionsCardSk";
import MainCardSk from "@/components/user-profile/skeletons/MainCardSk";
import RankedCardSk from "@/components/user-profile/skeletons/RankedCardSk";

export default function Loading() {
    return (
        <div className="mt-4">
            <div className="flex flex-col min-h-screen">
                <div className="container mt-4">
                    <div className="max-w-4xl w-full mx-auto grid gap-4 grid-cols-1">
                        <MainCardSk />
                        <div className="grid grid-cols-12 form-4">
                            <RankedCardSk />
                            <CasualCardSk />
                            <ChampionsCardSk />
                        </div>
                        <div>
                            <div className="flex flex-col sticky top-0 z-10">
                                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                                    <div className="h-5 w-28 bg-slate-700 flex animate-pulse"></div>
                                </div>
                            </div>
                            {[...Array(3).keys()].map(i => (
                                <div className="bg-gray-900 border border-gray-800 shadow-lg rounded-2xl p-5" key={i}>
                                    <div className="flex-none sm:flex animate-pulse">
                                        <div className="relative h-32 w-32 sm:mb-0 mb-3">
                                            <div className="text-center relative h-32 w-32 bg-slate-700 sm:mb-0 mb-3 rounded-2xl"></div>
                                        </div>
                                        <div className="flex-auto sm:ml-5">
                                            <div className="flex">
                                                <div className="flex-1 inline-flex items-center justify-between">
                                                    <div className="flex pt-2 text-sm text-gray-500">
                                                        <div className="flex-1 inline-flex">
                                                            <span className="h-4 w-28 bg-slate-700 mr-2"></span>
                                                            <span className="h-3 w-12 bg-slate-700 mt-1"></span>
                                                        </div>
                                                    </div>
                                                    <div className="flex pt-2 text-sm text-gray-500">
                                                        <div className="h-3 w-10 bg-slate-700 flex mt-1"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-auto text-gray-200 my-1">
                                                <div className="flex-1 inline-flex my-1">
                                                    <span className="h-3 w-20 bg-slate-700 mr-2"></span>
                                                    <span className="mr-3 border-r border-gray-600"></span>
                                                    <span className="h-3 w-16 bg-slate-700"></span>
                                                </div>
                                            </div>
                                            <div className="h-3 w-24 bg-slate-700 flex mt-1"></div>
                                            <div className="flex pt-2 text-sm text-gray-500 mr-4">
                                                <div className="flex-1 inline-flex items-center justify-between mt-2">
                                                    <div className="h-3 w-16 bg-slate-700 flex mt-1"></div>
                                                    <div className="h-3 w-14 bg-slate-700 flex mt-1"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}