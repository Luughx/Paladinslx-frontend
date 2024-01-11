import { NextResponse } from "next/server"
import { api } from "@/libs/paladinsAPI"

export async function GET(request, {params}) {
    const id = params.id

    if (params.id.length == 0) return  NextResponse.json({
        message: 'Error: id is zero'
    })
    const data = await api.searchPlayers(id).catch(err => console.log(err))

    if (data.length > 1) return NextResponse.json([data[0]])

    return NextResponse.json(data)
}
