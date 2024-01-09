import ChampionCard from "@/components/user-champions/ChampionCard";
import ChampionsPage from "@/components/user-champions/ChampionsPage";
import { championsImage } from "@/functions/main";

const getChampions = async (id) => {
  const { BACKEND_URI } = process.env;
  const res = await fetch(`${BACKEND_URI}/users/${id}/champions`, {
    next: { revalidate: 3600 },
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json()
}

const getChampionsDefault = async () => {
  const { BACKEND_URI } = process.env;
  const res = await fetch(`${BACKEND_URI}/champions`, {
    cache: "force-cache",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json()
}

const getLoadouts = async (id) => {
  const { BACKEND_URI } = process.env;
  const res = await fetch(`${BACKEND_URI}/users/${id}/loadouts`, {
    next: { revalidate: 180 },
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json()
}

export async function generateMetadata({ params }) {
  return {
    title: `${params.id}`,
    description: `${params.id} champions`
  }
}

export default async function Main({ params }) {
  const champions = await getChampions(params.id)
  const loadouts = await getLoadouts(params.id)
  const championsDefault = await getChampionsDefault()
  const images = await championsImage()

  let championsRoles = {}
  let championsFrontline = []
  let championsSupport = []
  let championsDamage = []
  let championsFlank = []

  championsDefault.map(champion => {
    championsRoles[champion.Name] = champion.Roles
  })

  champions.map(champion => {
    const rol = championsRoles[champion.champion]
    if (rol === "Paladins Front Line") championsFrontline.push(champion)
    else if (rol === "Paladins Support") championsSupport.push(champion)
    else if (rol === "Paladins Damage") championsDamage.push(champion)
    else if (rol === "Paladins Flanker") championsFlank.push(champion)
  })

  return (
    <ChampionsPage
      params={params}
      champions={champions}
      championsDefault={championsDefault}
      images={images}
      loadouts={loadouts}
      championsRoles={championsRoles}
      championsFrontline={championsFrontline}
      championsSupport={championsSupport}
      championsDamage={championsDamage}
      championsFlank={championsFlank}
    />
  )
}