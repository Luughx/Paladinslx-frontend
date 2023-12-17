import { api } from "@/libs/paladinsAPI"
import { NextResponse } from "next/server"

export async function GET(request, {params}) {
    const id = params.id
    if (params.id.length == 0) return  NextResponse.json({
        message: 'Error: id is zero'
    })

    const player = await api.getPlayer(parseInt(id))
    return NextResponse.json(player)
}
