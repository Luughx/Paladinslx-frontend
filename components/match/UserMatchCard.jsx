import { championsImage, kdaFunction } from "@/functions/main"
import Link from "next/link"
import Image from "next/image";

export default async function UserMatchCard({ name, id, kills, assists, deaths, damage, shielding, taken, healing, winner, champion, itemsRaw, itemsImage }) {
    const images = await championsImage()
    const items = itemsRaw.filter(item => item != "")

    return (
        <tr className={`${winner ? "dark:bg-sky-900" : "dark:bg-red-900"} bg-white dark:divide-gray-700 dark:bg-gray-900`}>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                <Link href={`/users/${id}/profile`} className="flex items-center gap-x-6">
                    <div>
                        <Image className="object-cover rounded-xl" src={images[champion]} alt={champion} width={70} height={70} />
                    </div>
                    <div>
                        {name}
                    </div>
                </Link>
            </td>
            <td className="py-4 text-sm font-medium dark:text-gray-300 whitespace-nowrap gap-x-2">
                {kills}/{deaths}/{assists} ({kdaFunction(kills, assists, deaths)} kda)
            </td>
            <td className="py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap gap-x-2">
                {damage}
            </td>
            <td className="py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap gap-x-2">
                {taken}
            </td>
            <td className=" py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap gap-x-2">
                {shielding}
            </td>
            <td className=" py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap gap-x-2">
                {healing}
            </td>
            <td className=" py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap gap-x-2">
                <div className="flex pt-2 text-sm text-gray-500">
                    <div className="flex-1 inline-flex items-center">
                        {items.map(item => (
                            <div key={item}>
                                <Image
                                src={itemsImage[item]} 
                                alt={item}
                                width={50}
                                height={50}
                                className="object-cover rounded-xl ml-2"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </td>
        </tr>
    )
}