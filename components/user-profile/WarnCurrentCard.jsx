"use client"
import Link from "next/link"
import { useState } from "react"

export default function WarnCurrentCard({ status, currentDefault, id, name }) {
    const [ active, setActive ] = useState(true)

    return (
        active && <div className={`bg-gray-900 border border-green-800 shadow-lg rounded-2xl p-4`}>
            <div className="grid grid-cols-2">
                <div className="text-base text-gray-100 font-medium">
                    {name} is in a match. <Link href={`/match/${status.Match}/active`} className="cursor-pointer text-blue-500">Show more</Link>
                </div>
                <div className="text-right text-gray-500 mr-2">
                    <span></span>
                    <span className="cursor-pointer" onClick={() => setActive(false)}>
                        x
                    </span>
                </div>
            </div>
        </div>
    )
}