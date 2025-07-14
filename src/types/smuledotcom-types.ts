export type SDCLoginResult = {
    success: boolean,
    user: {
        account_id: number,
        handle: string,
        pic_url: string,
        url: string,
        jid: string,
        xmpp_host: string[],
        session: string,
        is_verified: boolean
    }
}

export type SDCLanguage = {
    id: string, // en, es, de
    nativeName: string,
    enName: string
}
export type SDCGenre = {
    id: number,
    text: string
}
export type SDCSegment = {
    id: number,
    climax: boolean,
    start: number,
    end: number,
    tags?: string[], // i think
    type: "Intro" | "Verse" | "PreChorus" | "Chorus" | "Bridge" | "Outro" | "Miscellaneous" // TODO
}
export type SDCLyric = {
    group_parts: any[], // TODO
    part: ""|"part-1"|"part-2"|"both",
    text: string,
    ts: number, // time start in sec
}
export type SDCLyricVideoParagraph = {
    start_time: number,
    end_time: number,
    score_part: "solo", // TODO
    text: string
}
export type SDCArr = {
    addLyrics?: boolean,
    agreement?: boolean,
    appFamily?: "SING",
    arrKey?: string,
    artist: string,
    audioData: {
        createdAt?: Date,
        id: number,
        isExternal?: boolean,
        size: number,
        type: "arr",
        url: string, // audio url
        contentType?: string,
        metadataDuration?: number
    },
    cover?: {
        artist?: string,
        cover_url?: string,
        song_id?: any, // no idea, its null
        title?: string
    },
    coverUrl: {
        id?: number,
        url: string, // img url
    },
    genres: SDCGenre[],
    language: SDCLanguage,
    lyrics: {
        duration: number,
        group_parts_count: number,
        group_parts_names: object, // TODO
        id: number,
        lines: SDCLyric[],
        lyric_video_paragraphs: SDCLyricVideoParagraph[], // i suppose these are for the lyric video generation
    },
    ratingInfo: {
        highlyRated: boolean,
        rating?: number, // i think
        totalVotes: string, // its a number in a string
    },
    segProcessVer: number,
    segments: SDCSegment[],
    songId?: any, // its null for me
    tags: SDCGenre[], // its the same datatype
    title: string,
    trackType: "Lyrical",
    type: "arr",
    version: number
}
export type SDCArrSongConfig = {
    main: {
        isEditMode: boolean,
        isSpa: boolean, //?
        isSuggestingSegments: boolean,
        languageList: SDCLanguage[],
        maxArtistLength: number,
        maxAudioDuration: number,
        maxFileSize: number, // mb
        maxTagLength: number,
        maxTitleLength: number,
        minAudioDuration: number,
        minTagLength: number,
        songResourceUrl: string, // create resource url
        webUrl: string, // path to the web arr
    },
    segmentHelpModal: any, //TODO: im lazy and its useless
    song: {
        arrangement: SDCArr,
        uploadId?: any, // its null for me
    }
}

export type SDCGeneratedSegmentsResponse = {
    segments: SDCSegment[],
    segProcessVer: number
}

export type SDCSaveArrResponse = {
    arr_key: string,
    version: number,
    webUrl: string, // path, not direct url
    arrUpdated: boolean,
    updateList: string, // what got updated if any
    songUid?: any, // its null
    hasLyrics: boolean
}

export type SDCResourceCreationResult = {
    resource: {
        id: number,
        url: string,
        size: number,
        contentType: string
    }
}

export type SDCDetectLanguageResponse = {
    detected_language: {
        name: string, // its in CAPS
        code: string, // lowercase
        reliable: boolean,
    },
    new_detected_language: { // no idea what this is
        code: string,
        probability: number
    }
}