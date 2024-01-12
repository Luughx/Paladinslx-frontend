export default function Loading() {
    return (
        <div className="mt-4 container">
            <div className="max-w-5xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div className="bg-gray-900 p-5 rounded-2xl border-gray-800 transition-colors duration-300">
                    <div className="flex-none sm:flex animate-pulse">
                        <div className="relative h-32 w-32 bg-slate-700 sm:mb-0 mb-3 rounded-2xl"></div>
                        <div className="flex-auto sm:ml-5 justify-evenly">
                            <div className="flex items-center sm:mt-2">
                                <div className="flex items-center">
                                    <div className="flex flex-col">
                                        <div className="flex pt-2 text-sm text-gray-500">
                                            <div className="flex-1 inline-flex">
                                                <div className="h-4 w-40 bg-slate-700 flex mr-2">
                                                </div>
                                                <div className="h-3 w-10 bg-slate-700 flex mt-1">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1 inline-flex my-1">
                                            <span className="h-3 w-10 bg-slate-700 mr-3"></span>
                                            <span className="mr-3 border-r border-gray-600"></span>
                                            <span className="h-3 w-10 bg-slate-700"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-4 xl:mt-4">
                                <div className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                                    <i className="h-5 w-5 bg-slate-700 rounded-full"></i>
                                    <i className="h-5 w-5 bg-slate-700 rounded-full"></i>
                                    <i className="h-5 w-5 bg-slate-700 rounded-full"></i>
                                    <i className="h-5 w-5 bg-slate-700 rounded-full"></i>
                                    <i className="h-5 w-5 bg-slate-700 rounded-full"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}