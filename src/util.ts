import { SmuleSession, type ArrExtended, type SFamMembershipType } from "./types/smule-types"

export namespace Util {
    export function getParametersFromUrl(url: string) {
        return url.split("?")[1]
    }
    export function getHostFromFullUrl(url: string) {
        return url.split("/")[2]
    }
    export function getPathFromFullUrl(url: string) {
        let temp = url.replaceAll("://", "").split("/")
        temp.shift()
        return "/" + temp.join("/").split("?")[0]
    }
    export function queryToObject(query: string|URLSearchParams) {
        if (query instanceof URLSearchParams) return Object.fromEntries(query)
        return Object.fromEntries(new URLSearchParams(query))
    }
    export function objectToQuery(query: {[key: string]: string}) {
        return Object.entries(query).map(([key, value]) => `${key}=${value}`).join("&")
    }

    export function formatTime(ms: number, showMS = false) {
        if (!ms) return showMS ? "00:00.000": "00:00"
        let sec: number|string = Math.floor(ms / 1000)
        let min: number|string = Math.floor(sec / 60)
        sec %= 60
        if (sec < 10) sec = "0" + sec
        if (min < 10) min = "0" + min
        if (showMS) return `${min}:${sec}.${ms % 1000}`
        return `${min}:${sec}`
    }
    export function formatValue(value: number, largeCharacter = true) {
        if (value >= 1000) {
            if (value >= 1_000_000) return Math.round(value / 100_000) / 10 + (largeCharacter ? "M" : "m")
            return Math.round(value / 100) / 10 + (largeCharacter ? "K" : "k")
        }
        return value + ""
    }
}

export class CustomFormData {
    private data = {}

    public set(key: string, value: any, type = "application/octet-stream", filename?: string) {
        this.data[key] = {
            type,
            value,
            filename
        }
    }

    public get(key: string) {
        return this.data[key].value
    }
    public serialize() {
        let boundary = "--1335a53d-7c46-4dd6-8e1e-c2f96c3987c5"
        let buffers = [
            Buffer.from(boundary + "\r\n")
        ]
        for (let key of Object.keys(this.data)) {
            let str = `Content-Disposition: form-data; name="${key}"` +
                      (this.data[key].filename != undefined ? `; filename="${this.data[key].filename}"\r\n` : "\r\n") +
                      `Content-Transfer-Encoding: binary\r\n` +
                      `Content-Type: ${this.data[key].type}\r\n` +
                      `Content-Length: ${this.data[key].value.length}\r\n\r\n`
            buffers.push(Buffer.from(str))
            buffers.push(Buffer.from(this.data[key].value))
            buffers.push(Buffer.from("\r\n" + boundary + "\r\n"))
        }
        buffers.pop()
        buffers.push(Buffer.from("\r\n" + boundary + "--\r\n"))
        return Buffer.concat(buffers)
    }
}

export namespace SmuleUtil {
    export function checkLoggedIn(session: SmuleSession) {
        return !session.expired && session.sessionToken != ""
    }

    export function isVerified(verifiedType: string) {
        return ["STAFF", "PARTNER_ARTIST", "VERIFIED_BASIC"].includes(verifiedType)
    }

    export function isVIP(subApps: string[]) {
        return subApps.filter(s => ["sing_google", "sing"].includes(s)).length > 0
    }
    
    export function getGroupMembershipType(membership: number): SFamMembershipType {
        switch (membership) {
            case 1:
                return "ADMIN"
            case 2:
                return "MEMBER"
            case 3:
                return "PENDING_INVTN"
            case 4:
                return "PENDING_RQST"
            case 5:
                return "GUEST"
            default:
                return "UNKNOWN"
        }
    }

    export function getFilesFromArr(arr: ArrExtended) {
        return {
            preview: arr.normResources.find(r => r.role == "preview")?.url,
            cover: arr.normResources.find(r => r.role == "cover_art")?.url,
            cover_android: arr.normResources.find(r => r.role == "cover_art_google")?.url,
            cover_ios: arr.normResources.find(r => r.role == "cover_art_ios")?.url,
            midi_file: arr.normResources.find(r => r.role == "main")?.url,
            song_file: arr.normResources.find(r => r.role == "background")?.url,
            meta_file: arr.normResources.find(r => r.role == "meta")?.url,
            mir_file: arr.normResources.find(r => r.role == "mir")?.url,

            preview_original: arr.origResources.find(r => r.role == "preview")?.url,
            cover_original: arr.origResources.find(r => r.role == "cover")?.url,
            cover_android_original: arr.origResources.find(r => r.role == "cover_google")?.url,
            cover_ios_original: arr.origResources.find(r => r.role == "cover_ios")?.url,
            midi_file_original: arr.origResources.find(r => r.role == "midi")?.url,
            song_file_original: arr.origResources.find(r => r.role == "bg")?.url,
            pitch_file: arr.origResources.find(r => r.role == "pitch")?.url,
        }
    }
}