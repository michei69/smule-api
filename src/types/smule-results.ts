// TODO: document each result
// TODO: also add new results, cause we need to cover all urls

import type { sing_google_subscriptions, sing_google_stream_values, sing_google_buy_msg, sing_google_tutorial, sing_google_cccp, sing_google_songbook, sing_google_preSing, sing_google_ftuxBlocking, sing_google_songUpsell, sing_google_explore, sing_google_mediaPlayer, sing_google_ads, sing_google_smeaks, sing_profile, sing_playlists, sing_audio, sing_audioFilters, sing_arr, sing_onboarding, sing_cccp, sing_acappella, sing_video, sing_videoEncoding, sing_chat, sing_search, sing_videoFX, sing_videoStyles, sing_avqSurvey, sing_paywall, sing_freeform, dfp, sing_appLaunch, sing_crm, sing_boost, sing_share, sing_feed, sing_findFriendsModule, sing_localization, sing_seeds, sing_nowPlaying, sing_registration, sing_upload, sing_families, sing_appSettings, campfire_avStreamQuality, campfire_config, sing_virtualCurrency, campfire_audioFilters, links, sing_singingFlow, sing_explore, sing_songbookUsability, sing_templates, sing_topics, sing_banners, sing_shortJoins, sing_vcs, sing_notifications, sing_tipping, appFamily } from "./smule-settings-types";
import type { AccountIcon, SMULE_APP, SongCategory, Song, Cursor, Banner, PerformanceIcon, ParticipationIcon, Profile, SingProfile, Wallet, GiftIcon, Arr, TrendingSearch, SearchResultType, SearchResultCategory, AvTemplateLite, Comment, PlaylistDetailed, Playlist, RecPerformanceIcon, SFamList, Campfire, FeedItem, SocialInvite, SocialInvite2, UserTippingPref, RecAccount, ArrExtended, PerformanceDetail, SFam, PlaylistSortMethod } from "./smule-types";

/**
 * Base API response
 */
export type ApiResult<T> = {
    status: {
        code: number,
        message?: string,
        version: number // usually 1
    },
    data?: T
}


export type AccessTokenResult = {
    accessToken: string
}
export type AccountExploreResult = {
    recAccountIcons: RecAccount[],
    cursor: Cursor,
    personal: boolean
}
export type AccountLookupResult = {
    accountIcons: Array<AccountIcon>
}
export type AccountProfileStatsViewsResult = {
    profileViewsStatistics: {
        views: number,
        viewers: Array<{
            accountIcon: AccountIcon,
            lastViewedAt: Date,
            mutualFollowState: string|"NONE"
        }>,
        privacyMode: boolean
    },
    cursor: Cursor
}
export type AccountWalletResult = {
    wallet: Wallet
}

export type ArrResult = {
    arrVersion: ArrExtended 
}
export type ArrByKeysResult = {
    arrVersionLites: Arr[]
}
export type ArrBookmarkListResult = {
    songs: Arr,
    cursor: Cursor,
    totalCount: number
}

export type AvTemplateCategoryListResult = {
    recAvTemplateLites: Array<{
        avtemplateLite: AvTemplateLite
    }>
}

export type BannersResult = {
    banners: Array<Banner>
}

export type CampfireListResult = {
    campfires: Campfire[],
    cursor: Cursor
}
export type CategoryListResult = {
    categories: Array<{
        id: number,
        displayName: string
    }>
}
export type CategorySongsResult = {
    songs: Array<Song>,
    cursor: Cursor
}
export type ContactFindResult = {
    notFollowing: Array<{
        realName: string,
        accountIcon: AccountIcon
    }>,
    hasMatches: boolean // whether it found any of them
}

export type DeviceSettingsResult = {
    over_air_latency_v5: number
}

export type GiftsResult = {
    gifts: Array<{
        giftIcon: GiftIcon,
        count: number
    }>,
    giftCount: number
}

export type InviteMeResult = {
    invites: SocialInvite[],
    cursor: Cursor
}
export type InviteListResult = {
    invites: SocialInvite2[],
    next: number
}

export type LoginResult = {
    sessionToken: string,
    sessionTtl: number;
    refreshToken: string;
    playerId: number;
    playerNew: boolean;
    playerNewlyRegistered: boolean;
    playerNewlyInAppFam: boolean;
    policyAccepted: boolean;
    policyVersion: string;
    policyUrl: string;
    termUrl: string;
    accountId: number;
    /**
     * Username
     */
    handle: string;
    handleNew: boolean;
    /**
     * Username auto generated from email?
     */
    handlePrefill: boolean;
    email: string;
    emailVerified: boolean;
    newsletter: number;
    showEmailOpt: boolean;
    language: string;
    picUrl: string;
    picUrlType: string;
    loginCount: number;
    serverTime: number;
    playerStat: {
        installDate: number;
    };
    elControl: {
        npt: boolean;
    };
    standardChat: {
        jid: string;
        xmppHosts: string[];
    };
    campfireChat: {
        jid: string;
        xmppHosts: string[];
    };
    /**
     * this is usually empty
     */
    settings: string;
    birthDate?: {
        year: number;
        month: number;
    };
}
export type LoginInfoResult = {
    notificationCount: {
        activity: number,
        pubInvite: number,
        gift: number,
    },
    feedActivity: boolean,
    apiHosts: string[],
    performanceCount: number,
    splittests: string[]
}

export type LoginAsGuestResult = {
    loginResult: LoginResult,
    settings: SettingsResult
}
export type PerformanceResult = {
    performance: PerformanceIcon,
    lyricVid: boolean
}
export type PerformanceByKeysResult = {
    performanceIcons: Array<PerformanceIcon>
}
export type PerformancePartsResult = {
    participationIcons: Array<ParticipationIcon>,
    totalPerformances: number,
    accountCounters: {
        performanceCount: number,
    },
    storageLimit: number,
    next: number
}
export type PerformanceBookmarkSeedResult = {
    performanceIcons: Array<PerformanceIcon>,
    totalPerformances: number,
    next: number
}
export type PerformanceCreateResult = {
    performance: PerformanceIcon,
    trackKey: string
}
export type PerformanceCommentsResult = {
    performanceKey: string,
    commentUIViewInfo: {
        commenter: boolean,
        joiner: boolean,
    },
    comments: Array<Comment>,
    next: number
}
export type PerformanceCreateCommentResult = {
    postKey: string,
    comment: Comment
}
export type PerformanceDetailsResult = {
    performanceDetails: PerformanceDetail[]
}

export type PerformancesByAvTemplateResult = {
    performanceIcons: Array<PerformanceIcon>,
    cursor: Cursor,
    totalPerformances: number
}
export type PerformancesByUserResult = {
    participationIcons: Array<ParticipationIcon>,
    totalPerformances: number,
    accountCounters: {
        performanceCount: number
    },
    storageLimit: number,
    next: number
}


export type PlaylistExploreResult = {
    primary: PlaylistDetailed[],
    secondary: Playlist[]
}
export type PlaylistGetResult = {
    recPerformanceIcons: RecPerformanceIcon[],
    next: number
}
export type PlaylistViewResult = {
    items: Array<{
        performanceIcon: PerformanceIcon,
    }>,
    cursor: Cursor,
    playlistSortMethod: PlaylistSortMethod
}

export type PreferencesResult = {
    prefs: Array<{
        name: string,
        value: string // boolean as string
    }>
}
export type PreuploadResult = {
    resources: Array<{
        pop: string, // i have no idea what this is
        resourceType: "IMAGE"|"META"|"AUDIO",
        resourceId: number,
        hostname: string
    }>
}

export type RecAccountsResult = {
    recAccountIcons: Array<RecAccount>
}
export type RecTrendingSearchResult = {
    recTrendingSearches: TrendingSearch[]
}

export type SearchResult = {
    resultTypes?: SearchResultType[],
    categories?: SearchResultCategory[],
    songs?: Array<{
        type: "ARR",
        arrangementVersionLite: Arr
    }>,
    accts?: Array<AccountIcon>,
    seeds?: Array<PerformanceIcon>,
    recs?: Array<PerformanceIcon>,
    cfires?: Array<unknown>, // livestreams
    sfams?: Array<unknown>, // groups
    acctSocialMap?: {
        [key: string]: {
            numFollowers: number
        }
    },
    cursor?: Cursor
}
export type SearchAutocompleteResult = {
    options: Array<{
        text: string
    }>,
    categories: string[]
}

export type SettingsResult = {
    "sing_google.subscriptions": sing_google_subscriptions,
    "sing_google.stream_values": sing_google_stream_values,
    "sing_google.buy_msg": sing_google_buy_msg,
    "sing_google.tutorial": sing_google_tutorial,
    "sing_google.cccp": sing_google_cccp,
    "sing_google.songbook": sing_google_songbook,
    "sing_google.preSing": sing_google_preSing,
    "sing_google.ftuxBlocking": sing_google_ftuxBlocking,
    "sing_google.songUpsell": sing_google_songUpsell,
    "sing_google.explore": sing_google_explore,
    "sing_google.mediaPlayer": sing_google_mediaPlayer,
    "sing_google.ads": sing_google_ads,
    "sing_google.smeaks": sing_google_smeaks,
    "sing.profile": sing_profile,
    "sing.playlists": sing_playlists,
    "sing.audio": sing_audio,
    "sing.audioFilters": sing_audioFilters,
    "sing.arr": sing_arr,
    "sing.onboarding": sing_onboarding,
    "sing.cccp": sing_cccp,
    "sing.acappella": sing_acappella,
    "sing.video": sing_video,
    "sing.videoEncoding": sing_videoEncoding,
    "sing.chat": sing_chat,
    "sing.search": sing_search,
    "sing.videoFX": sing_videoFX,
    "sing.videoStyles": sing_videoStyles,
    "sing.avqSurvey": sing_avqSurvey,
    "sing.paywall": sing_paywall,
    "sing.freeform": sing_freeform,
    "dfp": dfp,
    "appLaunch": sing_appLaunch,
    "sing.crm": sing_crm,
    "sing.boost": sing_boost,
    "sing.share": sing_share,
    "sing.feed": sing_feed,
    "sing.findFriendsModule": sing_findFriendsModule,
    "sing.localization": sing_localization,
    "sing.seeds": sing_seeds,
    "sing.nowPlaying": sing_nowPlaying,
    "sing.registration": sing_registration,
    "sing.upload": sing_upload,
    "sing.families": sing_families,
    "sing.appSettings": sing_appSettings,
    "campfire.avStreamQuality": campfire_avStreamQuality,
    "campfire.config": campfire_config,
    "sing.virtualCurrency": sing_virtualCurrency,
    "campfire.audioFilters": campfire_audioFilters,
    "links": links,
    "sing.singingFlow": sing_singingFlow,
    "sing.explore": sing_explore,
    "sing.songbookUsability": sing_songbookUsability,
    "sing.templates": sing_templates,
    "sing.topics": sing_topics,
    "sing.banners": sing_banners,
    "sing.shortJoins": sing_shortJoins,
    "sing.vcs": sing_vcs,
    "sing.notifications": sing_notifications,
    "sing.tipping": sing_tipping,
    "appFamily": appFamily,
}

export type SFamInfoResult = {
    sfamInfo: {
        sfam: SFam,
        membership: "GUEST"|"MEMBER", // TODO
        sfamStat: {
            postCount: number,
            memberCount: number
        },
        owner: AccountIcon,
        adminIcons: AccountIcon[],
        webUrl: string
    }
}

export type SFamListResult = {
    sfamList: SFamList[],
    cursor: Cursor
}
export type SFamMemberListResult = {
    members: Array<AccountIcon>,
    cursor: Cursor
}

export type SingUserProfileResult = {
    profile: Profile,
    singProfile?: SingProfile
    followerOfViewer: boolean
}

export type SocialBlockListResult = {
    accountIds: number[]
}
export type SocialCommentLikesResult = {
    likes: Array<{
        accountIcon: AccountIcon
    }>
}
export type SocialFeedListResult = {
    feedItems: FeedItem[],
    cursor: Cursor
}
export type SocialFolloweesResult = {
    followees: Array<AccountIcon>,
    // i find it weird that the apps are separated from the followees
    accountApps: Array<{
        accountId: number,
        apps: SMULE_APP[]
    }>,
    totalFollowees: number
}
export type SocialFollowersResult = {
    followers: Array<AccountIcon>,
    // i find it weird that the apps are separated from the followers
    accountApps: Array<{
        accountId: number,
        apps: SMULE_APP[]
    }>,
    totalFollowers: number
}
export type SocialIsFollowingResult = {
    following: number[],
    notFollowing: number[]
}


export type SongbookResult = {
    categories: Array<SongCategory>,
    cat1Songs: Array<Song>,
    cat1Cursor: Cursor,
    disinterestedSongs: Array<Song>
}
export type StoreSubscriptionStatusResult = {
    isActive: boolean,
    status: string,
    skipTrial: boolean,
    storeCancellable: boolean
}

export type TopicOptionResult = {
    options: Array<{
        id: number,
        recId: string,
        displayName: string,
        coverUrls: string[]
    }>
}
export type TopicChooseResult = {
    freeCompositions: Array<{
        recId: string,
        compositionLite: { // should we have a separate type for this?
            type: "ARR",
            arrangementVersionLite: Arr
        }
    }>
}

export type UserUploadPictureResult = {
    picUrl: string,
    picUrlType: "user"
}

// unused
export type ListEntitlementsResult = {
    /**
     * This is empty for a free account, soo...
     */
    products: Array<any>
}