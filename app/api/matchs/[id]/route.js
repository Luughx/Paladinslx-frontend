import { api } from "@/libs/paladinsAPI"
import { NextResponse } from "next/server"

export async function GET(request, { params }) {
  const id = params.id

  if (params.id.length == 0)
    return NextResponse.json({
      message: "Error: id is zero",
    })

  const match = await api.getMatchDetails(id)

  let newMatch = []
  const unknownPlayer = {
    "Damage_Bot": 0,
    "Damage_Done_In_Hand": 0,
    "Damage_Done_Magical": 0,
    "Damage_Done_Physical": 0,
    "Damage_Mitigated": 0,
    "Damage_Player": 0,
    "Damage_Taken": 0,
    "Damage_Taken_Magical": 0,
    "Damage_Taken_Physical": 0,
    "Deaths": 0,
    "Distance_Traveled": 0,
    "Gold_Earned": 0,
    "Gold_Per_Minute": 0,
    "Healing": 0,
    "Healing_Bot": 0,
    "Healing_Player_Self": 0,
    "Item_Active_1": "",
    "Item_Active_2": "",
    "Item_Active_3": "",
    "Item_Active_4": "",
    "Killing_Spree": 0,
    "Kills_Bot": 0,
    "Kills_Double": 0,
    "Kills_Fire_Giant": 0,
    "Kills_First_Blood": 0,
    "Kills_Gold_Fury": 0,
    "Kills_Penta": 0,
    "Kills_Phoenix": 0,
    "Kills_Player": 0,
    "Kills_Quadra": 0,
    "Kills_Siege_Juggernaut": 0,
    "Kills_Single": 0,
    "Kills_Triple": 0,
    "Kills_Wild_Juggernaut": 0,
    "League_Losses": 0,
    "League_Points": 0,
    "League_Tier": 0,
    "League_Wins": 0,
    "Map_Game": null,
    "Mastery_Level": 0,
    "Match": 0,
    "Match_Duration": 0,
    "MergedPlayers": null,
    "Minutes": 0,
    "Multi_kill_Max": 0,
    "Objective_Assists": 0,
    "PartyId": 0,
    "Platform": null,
    "Rank_Stat_League": 0,
    "Reference_Name": "Unknown",
    "Region": null,
    "Skin": null,
    "SkinId": 0,
    "Structure_Damage": 0,
    "Surrendered": 0,
    "TaskForce": 0,
    "Team1Score": 0,
    "Team2Score": 0,
    "TeamId": 0,
    "Team_Name": null,
    "Time_In_Match_Seconds": 0,
    "Towers_Destroyed": 0,
    "Wards_Placed": 0,
    "Win_Status": null,
    "Winning_TaskForce": 0,
    "playerName": "Unknown",
    "playerId": Math.random(0, 2000)
  }

  let countWinners = 0
  let countLosers = 0

  let lastPlayer = match[0]

  match.forEach(player => {
    let temporalPlayer = player
    
    if (player.playerName && temporalPlayer.Win_Status == "Winner") countWinners++
    else if (player.playerName && temporalPlayer.Win_Status == "Loser") countLosers++

    if (!player.playerName) {
      temporalPlayer.playerName = "Unknown"
      temporalPlayer.Reference_Name = "Unknown"

      temporalPlayer.Item_Active_1 = ""
      temporalPlayer.Item_Active_2 = ""
      temporalPlayer.Item_Active_3 = ""
      temporalPlayer.Item_Active_4 = ""
    }

    if (5 - countWinners > 0 && temporalPlayer.Win_Status != lastPlayer.Win_Status) {
      for (let i=0; i < countWinners; i++) {
        newMatch.push(unknownPlayer)
      }
    }
    
    newMatch.push(temporalPlayer)
    
    lastPlayer = temporalPlayer
  })

  if (5 - countLosers > 0) {
    for (let i=0; i < countLosers; i++) {
      newMatch.push(unknownPlayer)
    }
  }

  if (!newMatch[0].Ban_1) newMatch[0].Ban_1 = "Unknown"
  if (!newMatch[0].Ban_2) newMatch[0].Ban_2 = "Unknown"
  if (!newMatch[0].Ban_3) newMatch[0].Ban_3 = "Unknown"
  if (!newMatch[0].Ban_4) newMatch[0].Ban_4 = "Unknown"
  if (!newMatch[0].Ban_5) newMatch[0].Ban_5 = "Unknown"
  if (!newMatch[0].Ban_6) newMatch[0].Ban_6 = "Unknown"
  if (!newMatch[0].Ban_7) newMatch[0].Ban_7 = "Unknown"
  if (!newMatch[0].Ban_8) newMatch[0].Ban_8 = "Unknown"

  return NextResponse.json(newMatch)
}
