"use client"

import Image from "next/image"
import { useState } from "react"

export default function ImagesItems({ images, image, level }) {
    const [active, setActive] = useState(false)

    const activeLevels = {
        0: 33,
        1: 66,
        2: 100
    }

    console.log(images[image])
    
    return (
        <div className="ml-2">
            <div onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
                <div>
                    <Image
                        src={images[image] ? images[image] : "/avatar-paladins.webp"}
                        alt={image}
                        width={50}
                        height={50}
                        className="object-cover rounded-xl w-32px h-[40px] inline-block shrink-0"
                    />
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 bg-gray-700 mt-1">
                    <div className="bg-blue-600 h-2.5 rounded-lg" style={{ width: activeLevels[level] + "%" }}></div>
                </div>
            </div>
            <div className={`${active ? "" : "hidden"} absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm`}>
                {image} - {level + 1} lvl
            </div>
        </div>
    )
}