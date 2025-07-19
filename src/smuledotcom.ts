// ⠀⠀⠀⠀⠀⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⢠⠇⠀⠹⣄⠀⠀⠀⢰⠲⠤⢄⡀⠀⠀⠀⠀⠀⠀⣠⠤⠒⠒⠉⠉⢡⡀⠀
// ⠀⠀⢠⡏⠀⠀⢀⣈⣁⣀⣀⣘⡇⠀⠀⠙⢦⡀⠀⠀⡐⠊⠁⠀⠀⠀⠀⠀⣼⠃⠀
// ⠀⠀⢸⠀⠰⣖⠋⠁⠀⠀⠀⠈⠁⠀⠀⠀⠀⠹⠲⠊⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀
// ⠀⢀⡿⠀⠀⠉⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡏⠀⠀
// ⠀⠈⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠀⠀⠀
// ⠀⠀⢧⠀⠀⠀⠀⠀⠀⣠⡤⡀⠀⠀⠀⠀⣀⡤⢤⣀⠀⠀⠀⠀⠀⠀⢀⠃⢀⡠⠆
// ⠀⠀⠀⠑⠂⠀⠀⢠⠟⣱⣾⣆⠀⠀⠀⢠⣷⡆⠀⠈⢱⡄⠀⠀⠀⣴⠛⡀⠘⠁⠀
// ⢀⡖⠉⣙⠧⠄⠀⠊⠀⣿⣿⡯⠀⠀⠀⣿⣿⡷⠀⠀⠸⡇⠀⠀⠀⠲⠾⡅⠉⠙⡆
// ⣾⠀⡄⢣⡀⢰⠠⣔⣀⠙⠛⣁⢡⡀⣀⠙⠿⠃⠀⠀⠀⡁⠀⡀⠀⠀⣴⠉⣈⠀⡟
// ⠘⣆⠀⠀⠙⡄⢦⠀⠁⠀⠀⠈⢣⠀⠨⡅⠀⠀⠀⠀⠘⢛⠛⠃⢠⠔⠃⠈⠀⢰⠇
// ⠀⠘⢧⡀⠸⡃⣈⠑⠶⢤⠄⠀⠀⠳⠴⠃⠀⠀⠀⠠⣔⠿⣀⠀⠘⠆⠀⢀⠴⠃⠀
// ⠀⠀⠈⠳⣄⠉⢨⡛⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡆⠀⠀⠉⠀⣠⡔⠁⠀⠀⠀
// ⠀⠀⠀⠀⠈⠷⣄⠉⢲⡀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠊⠀⠀⠀⢠⠾⠁⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠙⢆⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠡⠤⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
import type { SDCArr, SDCArrSongConfig, SDCDetectLanguageResponse, SDCGeneratedSegmentsResponse, SDCLoginResult, SDCResourceCreationResult, SDCSaveArrResponse } from "./types/smuledotcom-types.js";
import type { ApiResult } from "./types/smule-results.js";
import axios, { type AxiosInstance } from "axios";
import * as crypto from "crypto"

/**
 * smule.com urls used throughout the site
 * 
 * TODO: add more, maybe
 */
export namespace SmuleDotComUrls {
    export const baseUrl = 'https://www.smule.com' // host

    export const baseWebApiUrl = baseUrl + "/api" // actual api
    export const baseSiteApiUrl = baseUrl + "/s" // site related stuff
    export const baseSiteUploadUrl = baseSiteApiUrl + "/upload"
    export const songUploadArrApi = baseSiteUploadUrl + "/arr"

    // user stuff
    export const UserCheckEmail = baseWebApiUrl + '/user/check_email'
    export const UserEmailLogin = baseWebApiUrl + '/user/email_login'

    // upload stuff
    export const UploadAutocomplete = baseSiteUploadUrl + '/autocomplete'
    export const UploadAutocompleteTitle = UploadAutocomplete + '/title'
    export const UploadAutocompleteArtist = UploadAutocomplete + '/artist'
    export const UploadAutocompleteGenre = UploadAutocomplete + '/genre'
    export const UploadAutocompleteTag = UploadAutocomplete + '/tag'
    export const UploadCatalogMatch = baseWebApiUrl + '/upload/catalog/match'
    export const DetectLanguage = baseSiteApiUrl + "/detect_language"
    export const GenerateSegments = songUploadArrApi + "/generate_segments"

    export const SaveArr = songUploadArrApi + "/save"
    export const DeleteArr = songUploadArrApi + "/delete"

    export const getArrLyricSync = (arrKey: string) => `${baseUrl}/en/s/upload/arr/${arrKey}/arrangement/lyrics/sync`
}

/**
 * Similar to SmuleDigest, but for the website
 */
export namespace SmuleDotComSmulen {
    const SECRET = "M=|ZUyMu^-qWb}VL^jJd}Mv)8y%bQWXf>IFBDcJ>%4zg2Ci|telj`dVZ@"

    export function createString(url: string, csrf: string, data: string) {
        return `secret=${SECRET}&path=${url}&csrf=${csrf}&${data}`.split("&").sort().join("&")
    }

    export function digest(url: string, csrf: string, data: string) {
        const shasum = crypto.createHash("md5")
        return shasum.update(createString(url, csrf, data)).digest("hex")
    }
}

/**
 * The public interface for Smule's website API
 * 
 * You must run #fetchXsrfToken() before doing anything else, 
 * otherwise it will error out lol
 */
export class SmuleDotCom {
    // we could change to axios.get() / axios.post(), since 
    // axios isn't saving the cookies itself either way yk
    private axiosInst: AxiosInstance 
    private xsrfToken: string = ""
    cookies: string[] = []

    constructor() {
        this.resetAxios()
    }
    
    /**
     * Resets the axios instance, clearing
     * the saved cookies too
     */
    resetAxios() {
        this.axiosInst = axios.create({
            withCredentials: true,
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/237.84.2.178 Safari/537.36",
                "Accept": "" // this bitch returns 418 im a teapot! if you have accept set to anything for some fucking reason
            }
        })
        this.cookies = []
    }

    /**
     * Fetches a new CSRF token, required for certain actions
     */
    async fetchXsrfToken() {
        const req = await this.axiosInst.get(SmuleDotComUrls.baseUrl)
        const html: string = req.data
        for (const match of html.matchAll(/meta content="([^"]+)" name="csrf-token/gm)) {
            this.xsrfToken = match[1]
        }
        for (const cookie of req.headers['set-cookie']) {
            this.cookies.push(cookie.split(";")[0])
        }
    }

    private getHeaders() {
        return {
            "X-CSRF-Token": this.xsrfToken,
            "Cookie": this.cookies.join("; ") + ";",
        }
    }
    private async postFormEncoded(url: string, data: any) {
        const req = await this.axiosInst.post(url, new URLSearchParams(data) + "", {
            headers: {
                ...this.getHeaders(),
                "Content-Type": "application/x-www-form-urlencoded",
                "X-Smulen": SmuleDotComSmulen.digest(url.replace(SmuleDotComUrls.baseUrl, ""), this.xsrfToken, new URLSearchParams(data).toString())
            }
        })
        // cookie jar :silly:
        for (const cookie of req.headers['set-cookie']) {
            let skip = false
            for (let i = 0; i < this.cookies.length; i++) {
                if (this.cookies[i].split("=")[0] == cookie.split("=")[0]) {
                    this.cookies[i] = cookie
                    skip = true
                    break
                }
            }
            if (!skip) {
                this.cookies.push(cookie.split(";")[0])
            }
        }
        return req
    }

    /**
     * Checks whether an account with given email
     * address exists
     */
    async checkEmailExists(email: string) {
        const req = await this.postFormEncoded(SmuleDotComUrls.UserCheckEmail, { email })
        return req.data.email
    }

    /**
     * Logs into an account
     * @returns whether the action was successful
     */
    async login(email: string, password: string) {
        const req = await this.postFormEncoded(SmuleDotComUrls.UserEmailLogin, {
            "user[login]": email,
            "user[password]": password,
            tzOffset: 10800
        })
        const data: SDCLoginResult = req.data

        return data.success
    }


    /// MORE INFO REGARDING ARRANGEMENT UPLOADS
    // these are designed to be used in the following order (on the site)
    // 1. create the arrangement by uploading the mp3 file
    // 2. update the empty arrangement in memory
    // 2.1. optionally detect the language of your lyrics
    // 2.2. optionally generate segments for your lyrics
    // 3. saving the arrangement from your memory
    ///
    //TODO: make this more linear. Single function, maybe?
    //TODO: make the SDCArr a class? would it be easier to
    //TODO: modify it before uploading?

    
    /**
     * Creates a new arrangement
     * @param songFile The mp3 file you wish to upload
     * @returns An empty arrangement
     */
    async createArrangement(songFile: Uint8Array) {
        const temp = new FormData()
        temp.append("jsonData", JSON.stringify({
            role: "bg",
            appFamily: "SING"
        }))
        temp.append("file", new Blob([songFile]), "file.mp3")
        temp.append("debugInfo", JSON.stringify({
            duration: 0
        }))

        const initReq = await this.axiosInst.get(`${SmuleDotComUrls.baseUrl}/en/s/upload`, {
            headers: {
                ...this.getHeaders()
            }
        })
        const uploadUrl = this.getUploadDataFromHtml(initReq.data)?.songConfig.main.songResourceUrl

        console.log(this.getUploadDataFromHtml(initReq.data))

        const req = await this.axiosInst.post(`${uploadUrl}`, temp)
        const data: ApiResult<SDCResourceCreationResult> = req.data
        return {
            artist: "",
            audioData: {
                ...data.data.resource,
                type: "arr",
                // metadataDuration: 0
            },
            coverUrl: {
                url: ""
            },
            genres: [],
            language: {
                enName: "",
                nativeName: "",
                id: ""
            },
            lyrics: {
                duration: 0,
                group_parts_names: {},
                id: null,
                lines: []
            },
            segments: [],
            segProcessVer: 8,
            tags: [],
            title: ""
        } as SDCArr
    }


    private getUploadDataFromHtml(html: string): { songConfig: SDCArrSongConfig }|null {
        for (const match of html.matchAll(/Upload: (.+),/g)) {
            return JSON.parse(match[1])
        }
        return null
    }

    /**
     * Fetches the upload data for an already published arrangement
     * @param arrKey The arrangement's key
     * @returns The arrangement's song config
     */
    async fetchArrUploadData(arrKey: string) {
        const req = await this.axiosInst.get(SmuleDotComUrls.getArrLyricSync(arrKey), {
            headers: {
                ...this.getHeaders()
            }
        })
        const data = this.getUploadDataFromHtml(req.data)
        return data.songConfig as SDCArrSongConfig
    }

    /**
     * Autogenerate segments for your lyrics
     * @param arr Your arrangement
     * @returns The generated segments
     */
    async generateSegments(arr: SDCArr) {
        const req = await this.axiosInst.post(SmuleDotComUrls.GenerateSegments, arr, {
            headers: {
                ...this.getHeaders()
            }
        })

        return req.data as SDCGeneratedSegmentsResponse
    }

    /**
     * Save an arrangement
     * @param arr The arrangement to save
     * @returns Data about the arrangement (ex: the web url)
     */
    async saveArr(arr: SDCArr) {
        const req = await this.axiosInst.post(SmuleDotComUrls.SaveArr, arr, {
            headers: {
                ...this.getHeaders()
            }
        })

        return req.data as SDCSaveArrResponse
    }

    /**
     * Fetches title suggestions
     */
    async fetchTitleAutocomplete(query: string) {
        const req = await this.axiosInst.get(`${SmuleDotComUrls.UploadAutocompleteTitle}?term=${encodeURIComponent(query)}&appFamily=SING`)
        return req.data as {title: string}[]
    }

    /**
     * Fetches artist suggestions
     */
    async fetchArtistAutocomplete(query: string) {
        const req = await this.axiosInst.get(`${SmuleDotComUrls.UploadAutocompleteArtist}?term=${encodeURIComponent(query)}&appFamily=SING`)
        return req.data as {value: string}[]
    }

    /**
     * Fetches genre suggestions
     * @remarks You can only upload genres that are autocompleted
     */
    async fetchGenreAutocomplete(query: string) {
        const req = await this.axiosInst.get(`${SmuleDotComUrls.UploadAutocompleteGenre}?term=${encodeURIComponent(query)}&appFamily=SING`)
        return req.data as {value: {topicId: number, name: string}}[]
    }

    /**
     * Fetches tag suggestions
     */
    async fetchTagAutocomplete(query: string) {
        const req = await this.axiosInst.get(`${SmuleDotComUrls.UploadAutocompleteTag}?term=${encodeURIComponent(query)}&appFamily=SING`)
        return req.data as {value: string}[]
    }

    /**
     * Verifies if a song already exists with the same details (i think)
     * @param title Your arrangement's title
     * @param artist Your arrangement's artist
     * @param tags Your arrangement's tags
     * @returns Whether or not you're restricted (i think)
     */
    async matchCatalog(title: string, artist: string, tags: string[]) {
        const req = await this.axiosInst.post(SmuleDotComUrls.UploadCatalogMatch, {
            appFamily: "SING",
            artist,
            title,
            tags: tags.map(tag => ({id: tag, text: tag}))
        }, {
            headers: {
                ...this.getHeaders()
            }
        })

        return req.data as {restricted: boolean, cover?: any}
    }

    /**
     * Detects the language of the text provided (usually lyrics)
     * @param text The text to detect
     * @returns The detected language
     */
    async detectLanguage(text: string) {
        const req = await this.axiosInst.post(SmuleDotComUrls.DetectLanguage, {
            text
        }, {
            headers: {
                ...this.getHeaders()
            }
        })

        return req.data as SDCDetectLanguageResponse
    }

    /**
     * Delete an arrangement
     * @param arrKey The arrangement's key
     */
    async deleteArr(arrKey: string) {
        const req = await this.axiosInst.post(SmuleDotComUrls.DeleteArr, {
            arrKey
        }, {
            headers: {
                ...this.getHeaders()
            }
        })

        return req.data as ApiResult<{}>
    }
}