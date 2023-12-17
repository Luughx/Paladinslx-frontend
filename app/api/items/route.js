import { NextResponse } from "next/server"
import { api } from "@/libs/paladinsAPI"

export async function GET() {
    const items = await api.getItems()
    return NextResponse.json(items)
}
