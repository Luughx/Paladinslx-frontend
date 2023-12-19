"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function HomeInput() {

    const [username, setUsername] = useState("")
    const router = useRouter()

    const searchRoute = (e) => {
        console.log("entra")
        e.preventDefault()
        if (username.length == 0) return console.log("no hagas nada")
        
        router.push(`/users/${username}`)
        setUsername("")
    }

    return (
        <div className="flex mx-auto max-w-md gap-x-4 justify-center">
            <form onSubmit={() => {searchRoute}}>
                <input id="username" type="text" className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Enter your username" value={username} onChange={e => setUsername(e.target.value)}/>
                <button onClick={searchRoute} className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Search</button>
            </form>
        </div>
    )
}