// TODO: Document everything, and create new types for future Smule Results

import { Device } from "./smule-requests";

//#region //* Account and user stuff *\\
export type AccountIcon = {
    accountId: number;
    picUrl: string;
    picUrlType: string;
    handle: string;
    blurb: string;
    verifiedUrls: Array<{
        type: string;
        desc: string;
        url: string;
    }>;
    subApps: Array<string>;
    firstName: string;
    lastName: string;
    jid: string;
    verifiedType: string;

    // Positions for recordings and stuff
    latitude?: number,
    longitude?: number
}

export type Contact = {
    emails: string[],
    phoneNumbers: string[],
    realName: string, // the name you have them saved as
}

export type Profile = {
    accountIcon: AccountIcon,
    apps: SMULE_APP[],
    social: {
        numFollowers: number,
        numFollowees: number
    },
    players: Array<{
        app: string,
        playerId: number
    }>,
    webUrl: string,
    sfamCnt: number,
    ownPlaylistCnt: number,
    wallet: Wallet,
    phoneConnected: boolean,
    verifiedBadgeEligible: boolean,
    verifiedBadgeUnmetCriteria: string[],
    tippingProfile: {
        tipping: any[],
        tippingEnabled: boolean,
        withTermsAndConditions: boolean
    }
}

export type RecAccount = {
    recId: string,
    accountIcon: AccountIcon,
    reasonType: string,
    reasonVars: string[]
}

export type SingProfile = {
    theme: {
        background: number,
        foreground: number,
        lightText: boolean
    },
    coverUrl: string,
    displayName: string,
    pinPerformanceIcon: PerformanceIcon,
    pinPerformanceIcons: Array<PerformanceIcon>,
    mentionAccountIcons: Array<AccountIcon>,
    displayMentions: boolean
}

export type UserTippingPref = {
    provider: UserTippingProvider,
    handleType: TippingHandleType,
    handle: string
}
export type UserTippingProvider = {
    baseUrl: string,
    displayName: string,
    iconUrl: string,
    name: string,
    handleTypes: TippingHandleType[]
}
export type TippingHandleType = "URL"|"PHONE_NUMBER"|"EMAIL"

//#endregion


//#region //* Arr stuff *\\
export type Arr = {
    key: string,
    ver: number,
    appFamily: string,
    compTitle: string,
    ownerAccountIcon: AccountIcon,
    smuleOwned: boolean,
    artist: string,
    langId: string,
    songId: string,
    rating: number,
    highlyRated: boolean,
    totalVotes: number,
    perfCount: number,
    lyrics: boolean,
    multipart: boolean,
    coverUrl: string,
    webUrl: string,
    arrCreatedAt: number,
    totalPlays: number,
    noPaywall: boolean,
    name: string,
    price: {
        vipOnly: boolean,
        price: number
    },
    avTmplSegments?: Array<avTmplSegment>,
    composition?: {
        id: string,
        title: string,
        artist: string
    }
}
export type ArrExtended = {
    arr: Arr,
    ver: number,
    processState: number,
    published: boolean,
    lyrics: boolean,
    lyricAnimationSupport: number,
    multipart: boolean,
    groupParts: boolean,
    length: number,
    pitchTrack: boolean,
    origResources: {
        role: "preview"|"cover_ios"|"cover"|"midi"|"bg"|"cover_google"|"pitch",
        url: string,
        id: number,
        uid: string,
        contentType: string,
        size: number,
        createdAt: number
    }[],
    normResources: {
        role: "preview"|"cover_art_google"|"background"|"meta"|"mir"|"cover_art_ios"|"main"|"cover_art",
        url: string,
        id: number,
        uid: string,
        contentType: string,
        size: number,
        createdAt: number
    }[],
    avTmplSegments: {
        id: number,
        start: number,
        end: number,
        type: string,
        tags: string[]
    }[],
    recAvTmplSegment: {
        id: number,
        origin: string
    },
    supportedMode: string
}

export type Song = {
    recId: string,
    arrVersionLite: Arr,
    joinableSeedCount: number
}
export type SongCategory = {
    id: number,
    displayName: string
}

//#endregion




//#region //* Performances stuff *\\
export type PerformanceIcon = {
    performanceKey: string,
    playerId: number,
    accountIcon: AccountIcon,
    app: "sing";
    compType: "ARR";
    arrKey: string;
    title: string;
    artist: string;
    message: string;
    coverUrl: string;
    shortTermRenderedUrl: string;
    videoRenderedUrl: string;
    videoRenderedMp4Url: string;
    origTrackUrl: string;
    origTrackOptions: string;
    origTrackInstrumentId: string;
    origTrackPartId: number;
    origTrackCity: {
        city: string;
        country: string;
    };
    totalPerformers: number;
    totalVideoTracks: number;
    totalLoves: number;
    totalListens: number;
    totalComments: number;
    giftCnt: number;
    createdAt: number;
    webUrl: string;
    isPrivate: boolean;
    ensembleType: EnsembleType;
    childCount: number;
    lifetimeJoinCount: number;
    isJoinable: boolean;
    seed: boolean;
    liveAt: number;
    video: boolean;
    videoType: "NONE"|"VISUALIZER"|"VIDEO";
    videoResolution: string;
    boost: boolean;
    formType: string;
    isCastableAsSeed: boolean;
    arrVersion?: ArrExtended;
    visualizerRenderedUrl?: string;
    complete: boolean;
    avTemplateId: number;
    parentPerformanceKey?: string;

    recentTracks?: Array<{
        accountIcon: AccountIcon
    }>
}
export type PerformanceDetail = {
    performance: PerformanceIcon,
    restricted: boolean,
    lyricVid: boolean,
    bookmarked: boolean,
    favorited: boolean,
    loved: boolean,
    avTemplateDetails: AvTemplateLite,
    tippingMap: {
        [key: number]: UserTippingPref
    }
}
export type ParticipationIcon = {
    partCreatedAt: Date, // unix
    performanceIcon: PerformanceIcon
}
export type RecPerformanceIcon = {
    recId: string,
    exploreIcon: {
        videoLength: number
    },
    performanceIcon: PerformanceIcon
}

/**
 * ACTIVESEED -> Ongoing open performance invitations.
 * 
 * SEED -> Expired performance invitations.
 * 
 * FILLED -> Recordings.
 */
export type PerformancesFillStatus = "ACTIVESEED" | "SEED" | "FILLED"
export type EnsembleType = "SOLO" | "DUET" | "GROUP" | "BACKUP" | "MIX" | "BATTLE";
export type PerformanceList = {performanceIcons: PerformanceIcon[], next: number}
export type PerformancesSortOrder = "RECENT" | "HOT" | "LOVE" | "SUGGESTED"
export type PerformanceSortMethod = "NEWEST_FIRST" | "MOST_JOINED" | "MOST_LOVED"

//#endregion


//#region //* Social stuff *\\
export type SocialInvite = {
    performanceIcon: PerformanceIcon,
    invitedAt: Date
}
export type SocialInvite2 = {
    performanceKey: string,
    invitedAt: Date,
    inviter: AccountIcon
}
export type Comment = {
    postKey: string,
    time: Date,
    accountIcon: AccountIcon,
    message: string,
    messageXml: string,
    latitude: number,
    longitude: number,
    likeCount: number
}
export type GiftIcon = {
    id: number,
    name: string,
    type: "SYSTEM",
    animation: {
        id: number,
        type: "LOTTIE",
        speed: number,
        repeatCount: number,
        autoReverse: boolean,
        autoPlay: boolean,
        isStatic: boolean,
        minAutoPlayDelay: number,
        maxAutoPlayDelay: number,
        resources: Array<{
            id: number,
            type: "PREVIEW" | "FULL",
            resource: {
                id: number,
                url: string,
                size: number,
                contentType: string
            }
        }>
    }
}

//#endregion


//#region //* Campfire stuff (livestream) *\\
export type CampfireSyncResult = {
    campfire: Campfire,
    playStream: CampfirePlayStream,
    signups: any[],
    arrVersionLite: Arr,
    sendStats: boolean
}
export type Campfire = {
    id: number,
    ownerAccountIcon: AccountIcon,
    hostAccountIcon: AccountIcon,
    guestAccountIcon: AccountIcon,
    title: string,
    state: "ACTIVE"|string,
    giftCnt: number,
    roomJid: string,
    hidden: boolean,
    webUrl: string,
    occupantCount: number,
    previewArtist: string,
    previewName: string,
    createdAt: Date,
    expireTs: Date,
    mode: "AUDIO",
    languages: any[], // TODO: ?
    purposes: any[], // TODO: ?
}
export type CampfirePlayStream = {
    type: "AGORA",
    agoraStream: {
        appId: string,
        userId: number,
        channelName: string,
        role: "PLAY",
        token: string,
        expireAt: Date,
        hostUserId: number
    }
}

//#endregion

//#region //* SingFamily stuff (groups) *\\
export type SFamList = {
    sfam: SFam,
    sfamStat: {
        postCount: number,
        memberCount: number
    },
    adminIcons: any[], //??
}
export type SFam = {
    sfamId: number,
    name: string,
    desc: string,
    loc: string, // location
    lang: string,
    picUrl: string,
    sfamTag: string, // sth like discord.gg/blahblah but for smule groups
    tags: string[],
    enrollStatus: number, // 0 = invitation only, 1 = join requests
    approvalStatus: number // 0 = auto approve, 1 = manual approval
}
export type SFamMembershipType = "UNKNOWN" | "GUEST" | "PENDING_RQST" | "PENDING_INVTN" | "MEMBER" | "ADMIN"
//#endregion


//#region //* Search stuff *\\
export type SearchResultCategory = "NONE" | "TITLE" | "LYRIC" | string
export type SearchResultType = "CFIRE" | "SONG" | "ACTIVESEED" | "SFAM" | "ACCOUNT" | "RECORDING"
export type SearchResultSort = "POPULAR" | "RECENT" | "EXPIRE"

export type TrendingSearch = {
    recId: string,
    trendingSearch: string
}

//#endregion


//* Others
export type AvTemplateLite = {
    id: number,
    name: string,
    accountIcon: AccountIcon,
    imageUrl: string,
    mainResourceUrl: string,
    description?: string,
    vip: boolean,
    gen: number,
    type: "STANDARD"|string,
    tags: string[],
    hasSnapLens: boolean,
    hasMir: boolean,
    updatedAt: Date
}
export type avTmplSegment = {
    id: number,
    start: number,
    end: number,
    type: string,
    tags: Array<any>
}
export type FeedItem = {
    recId?: string, // your feed post
    postId?: number, // group feed post
    subject?: AccountIcon,
    action?: string|"LOVE"|"FamilyPost",
    actionTime?: Date,
    count?: number,
    source?: string|"MYNW"|"GHPS", // no fucking idea
    object: {
        performance?: PerformanceIcon
    }
}
export type PlaylistDetailed = {
    playlist: Playlist,
    recPerformanceIcons: RecPerformanceIcon[],
    next: number
}
export type Playlist = {
    id: number,
    name: string,
    message: string,
    extraData: string,
    imgUrl: string,
    trending: boolean
}
export type PlaylistIcon = {
    playlistKey: string,
    type: "ACCT", // i suppose account? maybe theres also SFAM?
    visibility: PlaylistVisibility,
    name: string,
    webUrl: string,
    tags: string[],
    stats: {
        itemsCount: number,
    },
    accountIcon: AccountIcon
}
export type PlaylistVisibility = "PUB"|"PRI"
export type PlaylistSortMethod = "OLDEST_FIRST" | "NEWEST_FIRST"

//* Miscellaneous
/**
 * An ad banner, usually on the home page
 */
export type Banner = {
    name: string,
    destUrl: string,
    imgUrl: string,
    targetType: string,
    positionId: number
}
export type Cursor = {
    next: string,
    hasNext: boolean
}
export type Wallet = {
    credit: number,
    earned: number,
    dailyLimitResetAt?: Date
}


//#region //* Custom types *\\
/**
 * Custom class used to store session data
 */
export class SmuleSession {
    sessionToken: string = ""
    refreshToken: string = ""
    isGuest: boolean = false
    expired: boolean = true
    device: Device = new Device()

    // globe geolocation stuff
    // these are used for creating performances and such
    latitude: 37
    longitude: -122
}

/**
 * These are generally used throughout smule's api,
 * but certain error codes are reused for other purposes too.
 * 
 * Depending on the context, these error codes might mean different things
 */
export const SmuleErrorCode = {
    61: "Tried to access non-guest endpoint, but you are guest",
    // Error code 50 can also be something along the lines of "Filename not specified"
    // during multipart requests
    50: "Digest error / Digest not provided",
    51: "Session error / Session not provided / Session expired",
    69: "Wrong credentials / Failed to log in",
    71: "Invalid offset",
    // this triggers if we attempt to use an older session token
    2001: "New session token required. Try to refresh your login!",
    1012: "VIP required",
    1013: "Subscription error / VIP required",
    10: "No result?",
    1052: "Not enough coins",
    2017: "Group waiting period not expired", // unsure what this actually means
    2013: "Banned from group",
    1044: "Group join limit reached",
}
export const SmuleRegisterErrorCode = {
    13: "Account already exists"
}

export type SMULE_APP = "UNKNOWN"|"MINIPIANO"|"SMULEDOTCOM"|"SING"|"MINIPIANO_ANDROID"|"AUTORAP_IOS"|"AUTORAP_GOOG"|"SING_GOOGLE"|"STUDIO_IOS"|"STUDIO_ANDROID"|"SING_HUAWEI"|"UNRECOGNIZED"

//#endregion
