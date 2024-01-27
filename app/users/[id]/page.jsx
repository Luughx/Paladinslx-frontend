import UserCard from "@/components/UserCard"
import Link from "next/link"

const getPlayers = async (id) => {
  const { BACKEND_URI } = process.env
  const res = await fetch(`${BACKEND_URI}/users/${id}`, {
    next: { revalidate: 3600 },
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  return res.json()
}

export async function generateMetadata({ params }) {
  return {
    title: `${params.id}`
  }
}

export default async function Home({ params }) {
  const players = await getPlayers(params.id).catch(err => {
    console.log(err) 
    return []
  })

  return (
    <div className="mt-4 container">
      <div className="flex flex-col min-h-screen">
        <div className="container mt-4">
          {players.length == 0 && <div className="max-w-4xl w-full mx-auto grid gap-4 grid-cols-1">
            <div className={`bg-gray-900 border border-red-800 shadow-lg rounded-2xl p-4`}>
              <div className="grid grid-cols-2">
                <div className="text-base text-gray-100 font-medium">
                  This player doesn&apos;t exist 
                </div>
              </div>
            </div>
          </div>}
          <div className="max-w-5xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {players.map((player) => (
              <Link href={`/users/${player.player_id}/profile`} className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1" key={player.player_id}>
                <UserCard
                  id={player.player_id}
                  name={player.Name}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}