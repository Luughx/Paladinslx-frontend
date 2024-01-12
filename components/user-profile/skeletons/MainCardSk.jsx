import { faArrowDown, faArrowUp, faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MainCardSk() {
    return (
        <div className="flex flex-col top-0 z-10">
            <div className="bg-gray-900 border border-gray-800 shadow-lg rounded-2xl p-5">
                <div className="flex-none sm:flex animate-pulse">
                    <div className="relative h-32 w-32 sm:mb-0 mb-3 rounded-2xl">
                        <div className="relative h-32 w-32 bg-slate-700 sm:mb-0 mb-3 rounded-2xl"></div>
                    </div>
                    <div className="flex-auto sm:ml-5 justify-evenly">
                        <div className="flex items-center sm:mt-2">
                            <div className="flex items-center">
                                <div className="flex flex-col">
                                    <div className="flex pt-2 text-sm text-gray-500">
                                        <div className="flex-1 inline-flex">
                                            <div className="h-4 w-40 bg-slate-700 flex mr-2"></div>
                                            <div className="h-3 w-10 bg-slate-700 flex mt-1"></div>
                                        </div>
                                    </div>
                                    <div className="flex-auto text-gray-400 my-1">
                                        <div className="flex-1 inline-flex my-1">
                                            <span className="h-3 w-12 bg-slate-700 mr-2"></span>
                                            <span className="mr-3 border-r border-gray-600"></span>
                                            <span className="h-3 w-12 bg-slate-700"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex pt-2 text-sm text-gray-400">
                            <div className="flex-1 inline-flex items-center">
                                <FontAwesomeIcon className="h-5 w-5 mr-1" icon={faArrowDown} />
                                <span className="h-3 w-12 bg-slate-700 mr-2"></span>
                            </div>
                            <div className="flex-1 inline-flex items-center">
                                <FontAwesomeIcon className="h-5 w-5 mr-1" icon={faArrowUp} />
                                <span className="h-3 w-12 bg-slate-700 mr-2"></span>
                            </div>
                            <div className="flex-1 inline-flex items-center">
                                <FontAwesomeIcon className="h-5 w-5 mr-1" icon={faFire} />
                                <span className="h-3 w-12 bg-slate-700 mr-2"></span>
                            </div>
                        </div>
                        <div className="flex pt-2 text-sm text-gray-500 mr-4 mt-4">
                            <div className="flex-1 inline-flex items-center justify-between">
                                <div className="h-3 w-20 bg-slate-700"></div>
                                <div className="h-3 w-16 bg-slate-700"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}