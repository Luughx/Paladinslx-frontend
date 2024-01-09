import Image from "next/image";
import { championsImage } from "@/functions/main";
import { ChampionRole } from "pe-paladins.js/lib/data";
import { ranks } from "@/functions/main";
import ImageBlur from "./all/ImageBlur";

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

const getDataPlayer = async (id) => {
  const { BACKEND_URI } = process.env;
  const res = await fetch(`${BACKEND_URI}/users/${id}/stats`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

export default async function UserCard({ id, name }) {
  const championsPlayer = await getChampionsPlayer(id);
  const player = await getDataPlayer(id);
  const imagesChamp = await championsImage();
  const ranksData = ranks();
  let images = [];

  if (championsPlayer[0]) images.push(championsPlayer[0].champion);
  if (championsPlayer[1]) images.push(championsPlayer[1].champion);
  if (championsPlayer[2]) images.push(championsPlayer[2].champion);
  if (championsPlayer[3]) images.push(championsPlayer[3].champion);
  if (championsPlayer[4]) images.push(championsPlayer[4].champion);

  return (
    <div>
      <div className="bg-gray-900 p-5 rounded-2xl shadow-sm cursor-pointer border-gray-800 hover:border-gray-900 hover:border-2 transition-colors duration-300">
        <div className="flex-none sm:flex">
          <div className="relative h-32 w-32 sm:mb-0 mb-3">
            <ImageBlur
              width={128}
              height={128}
              src={player.AvatarURL ? player.AvatarURL : "backend.avatar-paladins.png"}
              alt={`${id} avatar`}
              classes="w-32 h-32 object-cover rounded-2xl"
            />
          </div>
          <div className="flex-auto sm:ml-5 justify-evenly">
            <div className="flex items-center sm:mt-2">
              <div className="flex items-center">
                <div className="flex flex-col">
                  <div className="flex pt-2 text-sm text-gray-500">
                    <div className="flex-1 inline-flex">
                      <div className="flex text-xl text-gray-200 font-bold leading-none mr-2">
                        {name} {player.Title ? `(${player.Title})` : ""}
                      </div>
                      <div className="flex text-sm text-gray-500 leading-none mt-1">
                        {player.Region}
                      </div>
                    </div>
                  </div>
                  <div className="flex-auto text-gray-400 my-1">
                    <span className="mr-3">{player.Level} level</span>
                    <span className="mr-3 border-r border-gray-600 max-h-0"></span>
                    <span>{ranksData[parseInt(player.RankedKBM.Tier)]}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-4 xl:mt-4">
              <div className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                {images.map((image) => (
                  <ImageBlur
                    src={imagesChamp[image] ? imagesChamp[image] : "backend.avatar-paladins.png"}
                    width={50}
                    height={50}
                    alt={image}
                    classes="w-6 h-6 rounded-full bg-black"
                    loading="lazy"
                    key={image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
