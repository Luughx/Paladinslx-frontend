import { NextResponse } from "next/server"
import { api } from "@/libs/paladinsAPI"

export async function GET() {
    const players = await api.getChampions()
    return NextResponse.json(players)
}
