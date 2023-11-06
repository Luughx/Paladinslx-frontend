import { NextResponse } from "next/server"
import { API } from "pe-paladins.js"
const { DEV_ID, AUTH_KEY } = process.env

const api = new API({
    devId: DEV_ID,
    authKey: AUTH_KEY,
    languageId: 1
})

export async function GET(request, {params}) {
    const id = params.id
    if (params.id.length == 0) return  NextResponse.json({
        message: 'Error: id is zero'
    })

    const players = await api.getPlayerMatchHistory(parseInt(id))
    return NextResponse.json(players)
}
