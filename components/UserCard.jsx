import { championsImage } from "@/functions/main";
import { ChampionRole } from "pe-paladins.js/lib/data";

const getChampionsPlayer = async (id) => {
  const { BACKEND_URI } = process.env;
  const res = await fetch(`${BACKEND_URI}/users/${id}/champions`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

export default async function UserCard({ id, name }) {
  const championsPlayer = await getChampionsPlayer(id);
  const imagesChamp = await championsImage();
  let images = [];

  if (championsPlayer[0]) images.push(championsPlayer[0].champion);
  if (championsPlayer[1]) images.push(championsPlayer[1].champion);
  if (championsPlayer[2]) images.push(championsPlayer[2].champion);
  if (championsPlayer[3]) images.push(championsPlayer[3].champion);
  if (championsPlayer[4]) images.push(championsPlayer[4].champion);

  return (
    <div>
      <div className=" bg-black/20 p-6 rounded-md shadow-sm cursor-pointer border-gray-800 hover:border-gray-900 hover:border-2 transition-colors duration-300">
        <h2 className="text-xl font-semibold mb-4">{name}</h2>
        <p className="text-white">id: {id}</p>
        <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-4 xl:mt-4">
          <div className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
            {images.map(image => (
              <img
                src={imagesChamp[image]}
                alt=""
                className="w-6 h-6 rounded-full bg-black"
                loading="lazy"
                key={image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
