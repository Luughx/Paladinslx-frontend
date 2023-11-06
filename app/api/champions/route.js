import { NextResponse } from "next/server"
import { API } from "pe-paladins.js"
const { DEV_ID, AUTH_KEY } = process.env

const api = new API({
    devId: DEV_ID,
    authKey: AUTH_KEY,
    languageId: 1
})

export async function GET() {
    const players = await api.getChampions()
    return NextResponse.json(players)
}
