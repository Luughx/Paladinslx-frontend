async function kdaFunction(kills, assists, deaths) {
    const kda = deaths != 0 ? ((kills + (assists/2)) / deaths).toFixed(2) : (kills + (assists/2)).toFixed(2)
    return kda
}

async function getItems() {
    const { BACKEND_URI } = process.env;
    const res = await fetch(`${BACKEND_URI}/items`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
    });
    return res.json();
}

async function itemsImage() {
    const items = await getItems()
    let images = {}

    items.map(item => {
        images[item.DeviceName] = item.itemIcon_URL
    })
    
    return images
}

async function getChampions() {
    const { BACKEND_URI } = process.env;
    const res = await fetch(`${BACKEND_URI}/champions`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
    });
    return res.json();
}

async function championsImage() {
    const champions = await getChampions()
    let images = {}

    champions.map(champion => {
        images[champion.Name] = champion.ChampionIcon_URL
    })
    
    return images
}

function ranks() {
    return {
    0: "Unranked",
    1: "Bronze V",
    2: "Bronze IV",
    3: "Bronze III",
    4: "Bronze II",
    5: "Bronze I",
    6: "Silver V",
    7: "Silver IV",
    8: "Silver III",
    9: "Silver II",
    10: "Silver I",
    11: "Gold V",
    12: "Gold IV",
    13: "Gold III",
    14: "Gold II",
    15: "Gold I",
    16: "Platinum V",
    17: "Platinum IV",
    18: "Platinum III",
    19: "Platinum II",
    20: "Platinum I",
    21: "Diamond V",
    22: "Diamond IV",
    23: "Diamond III",
    24: "Diamond II",
    25: "Diamond I",
    26: "Master",
    27: "Grand Master"
    }
}

export { ranks, championsImage, kdaFunction, itemsImage }