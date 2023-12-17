import { API } from "pe-paladins.js"
const { DEV_ID, AUTH_KEY } = process.env

export const api = new API({
    devId: DEV_ID,
    authKey: AUTH_KEY,
    languageId: 1
})