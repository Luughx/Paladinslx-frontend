import { championsImage, kdaFunction } from "@/functions/main"
import Link from "next/link"
import Image from "next/image";
import ImageBlur from "../all/ImageBlur";

export default async function UserMatchCard({ name, id, kills, assists, deaths, damage, shielding, taken, healing, winner, champion, itemsRaw, itemsImage }) {
    const images = await championsImage()
    const items = itemsRaw.filter(item => item != "")

    return (
        <tr className={`${winner ? "dark:bg-sky-900" : "dark:bg-red-900"} dark:divide-gray-700 dark:bg-gray-900`}>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                <Link href={`/users/${id}/profile`} className="flex items-center gap-x-6">
                    <div className="relative inline-block shrink-0 rounded-2xl me-3">
                        <ImageBlur 
                        width={70} 
                        height={70} 
                        classes="object-cover rounded-xl w-32px h-32px inline-block shrink-0" 
                        src={images[champion] ? images[champion] : "backend.avatar-paladins.webp"} 
                        alt={champion} 
                        />
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
            <td className="py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap gap-x-2">
                <div className="flex items-center gap-x-6">
                    <div className="flex inline-flex shrink-0 rounded-2xl me-3">
                        {items.map(item => (
                            <div key={item}>
                                <ImageBlur
                                src={itemsImage[item] ? itemsImage[item] : "backend.avatar-paladins.webp"} 
                                alt={item}
                                width={50}
                                height={50}
                                classes="object-cover rounded-xl w-32px h-32px inline-block shrink-0 ml-2"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </td>
        </tr>
    )
}