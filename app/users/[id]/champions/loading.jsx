import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Loading() {
    return (
        <div className="mt-4">
            <div className="max-w-4xl w-full mx-auto grid gap-4 grid-cols-1">
                <div>
                    <span className="h-10 w-40 bg-slate-700"></span>
                </div>
                <div className="flex flex-col min-h-screen">
                    <div className="container">
                        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-4 mb-5 text-gray-700">
                            <div className="bg-gray-900 rounded-2xl p-5 text-center">
                                <div className="font-bold animate-pulse">All</div>
                            </div>
                            <div className="bg-gray-900 rounded-2xl p-5 text-center">
                                <div className="font-bold animate-pulse">Frontline</div>
                            </div>
                            <div className="bg-gray-900 rounded-2xl p-5 text-center">
                                <div className="font-bold animate-pulse">Support</div>
                            </div>
                            <div className="bg-gray-900 rounded-2xl p-5 text-center">
                                <div className="font-bold animate-pulse">Damage</div>
                            </div>
                            <div className="bg-gray-900 rounded-2xl p-5 text-center">
                                <div className="font-bold animate-pulse">Flank</div>
                            </div>
                        </div>
                        {[...Array(20).keys()].map((i) => (
                            <div className="bg-gray-900 border border-gray-800 shadow-lg rounded-2xl pr-5 pl-5 pt-5" key={i}>
                                <div className="flex-none sm:flex animate-pulse">
                                    <div className=" relative h-32 w-32 sm:mb-0 mb-3">
                                        <div className="relative h-32 w-32 bg-slate-700 sm:mb-0 mb-3 rounded-2xl"></div>
                                    </div>
                                    <div className="flex-auto sm:ml-5">
                                        <div className="flex">
                                            <div className="flex-1 inline-flex items-center justify-between">
                                                <div className="flex pt-2 text-sm text-gray-500">
                                                    <div className="flex-1 inline-flex">
                                                        <div className="h-4 w-40 bg-slate-700 flex mr-2">
                                                        </div>
                                                        <div className="h-3 w-10 bg-slate-700 flex mt-1">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-auto text-gray-200 my-1">
                                            <div className="flex-1 inline-flex my-1">
                                                <span className="h-3 w-12 bg-slate-700 mr-2"></span>
                                                <span className="h-3 w-12 bg-slate-700 mr-2"></span>
                                                <span className="h-3 w-12 bg-slate-700 mr-3"></span>
                                                <span className="mr-3 border-r border-gray-600"></span>
                                                <span className="h-3 w-10 bg-slate-700"></span>
                                            </div>
                                        </div>
                                        <div className="text-gray-500 my-1">
                                            <span></span>
                                        </div>
                                        <div className="flex pt-2 text-sm text-gray-500 mr-4">
                                            <div className="flex-1 inline-flex items-center justify-between">
                                                <span className="h-3 w-20 bg-slate-700"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mb-1">
                                    <button className="text-gray-600">
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}