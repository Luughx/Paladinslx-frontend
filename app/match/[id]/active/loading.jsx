export default function Loading() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="container mt-4">
                <section className="max-w-4xl w-full mx-auto grid gap-4 grid-cols-1">
                    <div className="h-4 w-24 bg-slate-700 animate-pulse"></div>
                    <div className="flex flex-col mb-4">
                        <div className="overflow-x-auto">
                            <div className="inline-block min-w-full py-2 align-middle">
                                <div className="overflow-hidden dark:border-gray-700 md:rounded-2xl">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <tbody className="divide-y divide-gray-800">
                                            <tr className={`bg-gray-900`}>
                                                {[...Array(5).keys()].map(i => (
                                                    <td
                                                        className={`p-4 text-gray-500 dark:text-gray-300 whitespace-nowrap animate-pulse`}
                                                        key={i}>
                                                        <div className="flex flex-col justify-center items-center">
                                                            <div className={`relative inline-block shrink-0 rounded-2xl `}>
                                                                <div className="text-center relative h-20 w-20 bg-slate-700 sm:mb-0 mb-3 rounded-lg"></div>
                                                            </div>
                                                            <div className="mt-1 text-sm font-bold line-clamp-2">
                                                                <div className="h-4 w-16 bg-slate-700 flex mt-1"></div>
                                                            </div>
                                                            <div className="h-2 w-12 bg-slate-700 flex mt-1"></div>
                                                            <div className="h-3 w-20 bg-slate-700 flex mt-2"></div>
                                                        </div>
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr className={`bg-white dark:divide-gray-700 dark:bg-gray-900`}>
                                                <td className="p-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">

                                                </td>
                                                <td className="p-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">

                                                </td>
                                                <td className="p-4 text-2xl font-bold text-gray-500 dark:text-gray-300 whitespace-nowrap text-center animate-pulse">
                                                    vs
                                                </td>
                                                <td className="p-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">

                                                </td>
                                                <td className="p-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">

                                                </td>
                                            </tr>
                                            <tr className={`bg-gray-900`}>
                                                {[...Array(5).keys()].map(i => (
                                                    <td
                                                        className={`p-4 text-gray-500 dark:text-gray-300 whitespace-nowrap animate-pulse`}
                                                        key={i}>
                                                        <div className="flex flex-col justify-center items-center">
                                                            <div className={`relative inline-block shrink-0 rounded-2xl `}>
                                                                <div className="text-center relative h-20 w-20 bg-slate-700 sm:mb-0 mb-3 rounded-lg"></div>
                                                            </div>
                                                            <div className="mt-1 text-sm font-bold line-clamp-2">
                                                                <div className="h-4 w-16 bg-slate-700 flex mt-1"></div>
                                                            </div>
                                                            <div className="h-2 w-12 bg-slate-700 flex mt-1"></div>
                                                            <div className="h-3 w-20 bg-slate-700 flex mt-2"></div>
                                                        </div>
                                                    </td>
                                                ))}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}