import BarChart from "@/components/match/BarChart";
import UserMatchCard from "@/components/match/UserMatchCard";
import { championsImage, itemsImage } from "@/functions/main";
import Image from "next/image";
import "./page.css"
import UserMatchActiveCard from "@/components/match-active/UserMatchActiveCard";

const getMatch = async (id) => {
  const { BACKEND_URI } = process.env;
  const res = await fetch(`${BACKEND_URI}/match/${id}/active`, {
    next: { revalidate: 600 },
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

export async function generateMetadata({ params }) {
  return {
    title: `${params.id}`,
    description: `${params.id} match active`
  }
}

export default async function Home({ params }) {
  const match = await getMatch(params.id);
  
  const images = await championsImage();
  const items_image = await itemsImage();

  const first = []
  const second = []

  match.map(player => {
    if (player.taskForce == 1) first.push(player)
    else second.push(player)
  })

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mt-4">
        <section className="max-w-4xl w-full mx-auto grid gap-4 grid-cols-1">
          {match.length === 1 && <div className="max-w-4xl w-full mx-auto grid gap-4 grid-cols-1">
            <div className={`bg-gray-900 border border-red-800 shadow-lg rounded-2xl p-4`}>
              <div className="grid grid-cols-2">
                <div className="text-base text-gray-100 font-medium">
                  This match doesn&apos;t exist or has already finished
                </div>
              </div>
            </div>
          </div>}
          {match.length > 1 && <div>
            <div className="">
              <span className="text-2xl font-bold">
                {match[0].mapGame}
              </span>
              <span className="ml-2 text-gray-500">
                {match[0].playerRegion}
              </span>
            </div>
            <div className="flex flex-col mb-4">
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full py-2 align-middle">
                  <div className="overflow-hidden dark:border-gray-700 md:rounded-2xl">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <tbody className="divide-y divide-gray-800">
                        <UserMatchActiveCard
                          players={first}
                          images={images}
                        />
                        <tr className={`bg-white dark:divide-gray-700 dark:bg-gray-900`}>
                          <td className="p-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">

                          </td>
                          <td className="p-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">

                          </td>
                          <td className="p-4 text-2xl font-bold text-gray-500 dark:text-gray-300 whitespace-nowrap text-center">
                            vs
                          </td>
                          <td className="p-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">

                          </td>
                          <td className="p-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">

                          </td>
                        </tr>
                        <UserMatchActiveCard
                          players={second}
                          images={images}
                        />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>}
        </section>
      </div>
    </div>
  )
}
