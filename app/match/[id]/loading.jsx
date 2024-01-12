export default function Loading() {
    return (
        <div className="container mt-4 p-4">
            <div className="h-6 w-24 bg-slate-700 flex mt-1"></div>

            <div className="flex justify-center items-center animate-pulse">
                <div className="h-8 w-16 bg-slate-700 flex mt-1"></div>
            </div>

            <div className="h-5 w-16 bg-slate-700 flex mt-1"></div>
            <div className="flex pt-2 text-sm text-gray-500 mr-4">
                <div className="flex-1 inline-flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                        <div className="flex pt-2 text-sm text-gray-500 mr-4">
                            <div className="flex-1 inline-flex items-center justify-between">
                                {[...Array(4).keys()].map(i => (
                                    <div key={i} className="mr-4">
                                        <div className="text-center relative h-20 w-20 bg-slate-700 sm:mb-0 mb-3 rounded-xl"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="text-sm text-gray-500">
                        <div className="flex pt-2 text-sm text-gray-500A">
                            <div className="flex-1 inline-flex items-center justify-between">
                                {[...Array(4).keys()].map(i => (
                                    <div key={i} className="mr-4">
                                        <div className="text-center relative h-20 w-20 bg-slate-700 sm:mb-0 mb-3 rounded-xl"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="container mt-4 mx-auto">
                <div className="flex flex-col mb-4">
                    <div className="overflow-x-auto">
                        <div className="inline-block min-w-full py-2 align-middle">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-2xl">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                User
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                KDA
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Damage
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Taken
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Shielding
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Healing
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Items
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-800">
                                        {[...Array(10).keys()].map(i => (
                                            <tr className={`bg-white dark:divide-gray-700 dark:bg-gray-900`} key={i}>
                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap animate-pulse">
                                                    <div className="flex items-center gap-x-6">
                                                        <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                                            <div className="text-center relative h-16 w-16 bg-slate-700 sm:mb-0 mb-3 rounded-2xl mt-3"></div>
                                                        </div>
                                                        <div className="h-5 w-28 bg-slate-700 flex"></div>
                                                    </div>
                                                </td>
                                                <td className="py-4 text-sm font-medium dark:text-gray-300 whitespace-nowrap gap-x-2 animate-pulse">
                                                    <div className="h-4 w-20 bg-slate-700 flex"></div>
                                                </td>
                                                <td className="py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap gap-x-2 animate-pulse">
                                                    <div className="h-4 w-10 bg-slate-700 flex"></div>
                                                </td>
                                                <td className="py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap gap-x-2 animate-pulse">
                                                    <div className="h-4 w-10 bg-slate-700 flex"></div>
                                                </td>
                                                <td className=" py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap gap-x-2 animate-pulse">
                                                    <div className="h-4 w-10 bg-slate-700 flex"></div>
                                                </td>
                                                <td className=" py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap gap-x-2 animate-pulse">
                                                    <div className="h-4 w-10 bg-slate-700 flex"></div>
                                                </td>
                                                <td className="py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap gap-x-2 animate-pulse">
                                                    <div className="flex items-center gap-x-6">
                                                        <div className="flex inline-flex shrink-0 rounded-2xl me-3">
                                                            {[...Array(4).keys()].map(i => (
                                                                <div key={i}>
                                                                    <div className="object-cover rounded-xl h-14 w-14 bg-slate-700 inline-block shrink-0 ml-2"></div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex pt-2 text-sm text-gray-200 mt-4">
                    <div className="lg:flex-1 lg:inline-flex items-center justify-between">
                        {[...Array(2).keys()].map(i => (
                            <div className="w-full md:w-full bg-gray-900 shadow-lg rounded-2xl p-4 md:mr-2 lg:mr-2 md:mt-0 lg:mt-0" key={i}>
                                <div className="p-4 animate-pulse">
                                    <div className="h-5 w-20 bg-slate-700 flex"></div>
                                    <div className="h-56 w-full bg-slate-700 mt-3"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}