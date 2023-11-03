import Link from "next/link"

export const metadata = {
  title: 'Paladins',
  description: '...',
}

const getPlayers = async (id) => {
  const { BACKEND_URI } = process.env
  const res = await fetch(`${BACKEND_URI}/users/${id}`, {method: "GET", headers: {
    "Content-Type": "application/json"
  }})
  return res.json()
}

export default async function Home({params}) {
  const players = await getPlayers(params.id)
  
  return (
    <div className="mt-4 container">
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {players.map((player) => (
        <Link href={`/users/${player.player_id}/profile`} className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1" key={player.player_id}>
          <div className=" bg-black/20 p-6 rounded-md shadow-sm cursor-pointer border-gray-800 hover:border-gray-900 hover:border-2 transition-colors duration-300">
            <h2 className="text-xl font-semibold mb-4">{player.Name}</h2>
            <p className="text-white">id: {player.player_id}</p>
            <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-4 xl:mt-4">
              <div className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                <img src="https://placekitten.com/48/48" alt="" className="w-6 h-6 rounded-full bg-black" loading="lazy" />
              </div>
            </div>
          </div>
        </Link>
      ))}
      </div>
    </div>
  )
}