import { NextResponse } from "next/server"
import { api } from "@/libs/paladinsAPI"
import { getPlaiceholder } from "plaiceholder";

export async function GET(request, {params}) {
    const id = params.id
    if (params.id.length == 0) return  NextResponse.json({
        message: 'Error: id is zero'
    })

    const data = await api.getChampionCards(parseInt(id))

    let cards = []
    for (let i=0; i<data.length; i++) {
        const buffer = await fetch(data[i].championCard_URL).then(async (res) => {
            return Buffer.from(await res.arrayBuffer())
        })
    
        const { base64 } = await getPlaiceholder(buffer).catch(err => {
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGMwZtD9f/3r/xf/jRi0GBI04v+/+31uymJ1BlmG8tjYVGe3dW39iQ7+AGvyEVg1Jq9jAAAAAElFTkSuQmCC"
        })
        let temporalCard = data[i]
        temporalCard["blurUrl"] = base64
    
        cards.push(temporalCard)
    }
    
    return NextResponse.json(cards)
}
