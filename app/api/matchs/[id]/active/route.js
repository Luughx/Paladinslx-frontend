import { NextResponse } from "next/server"
import { api } from "@/libs/paladinsAPI"

export async function GET(request, {params}) {
    const id = params.id
    if (params.id.length == 0) return  NextResponse.json({
        message: 'Error: id is zero'
    })

    const data = await api.getActiveMatchDetails(parseInt(id))
    return NextResponse.json(data)
}
