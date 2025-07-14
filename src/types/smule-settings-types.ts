//#region Settings
export type campfire_audioFilters = {
    audioFXOrder: string[],
    defaultFX: string,
    /**
     * This is empty for me for some reason
     */
    fxConfig: object,
    vipOnlyFX: string[]
}
export type sing_freeform = {
    audioFreeformEnabled: boolean;
    lyricScrollingEnabledFV1: boolean;
    lyricScrollingEnabledFV2: boolean;
    lyricsScrollingEnabled: boolean;
    lyricsSizeShrinkEnabled: boolean;
    lyricsSizeShrinkEnabledFV1: boolean;
    videoAddEnabled: boolean;
}
export type sing_google_ftuxBlocking = {
    block: boolean,
    headphonesScreen: boolean,
    volumeScreen: boolean
}
export type sing_google_subscriptions = {
    dailyPassEnabled: boolean,
    definitions: Array<{
        sku: string,
        trial?: boolean,
        period: string,
        label_key: string,
        description_key: string,
        trial_label_key?: string,
        trial_description_key?: string
    }>,
    paywallScreen: string,
    paywallWorkflowEnabled: boolean,
    priceTextFormat: number,
    showDisclaimer: boolean,
    showDisclaimerV2: boolean,
    showDisclaimerV2Trial: boolean,
    useFlow: string
}
export type sing_appSettings = {
    androidUIVersion: number,
    decodeCacheSize: number,
    existingUserEmailVerificationEnabled: boolean,
    groupsBottomSheetEnabled: boolean,
    idfaPrompt: boolean,
    initialTab: string,
    navBarAppearance: string,
    network_timeout: number,
    newHeaderEnabled: boolean,
    notificationBadgeAppearance: string,
    showTabLabels: boolean,
    toldYaSo: boolean
}
export type sing_videoFX = {
    airbrush: {
        enabled: boolean
    },
    default: string,
    order: Array<string>,
    vip: Array<string>
}
export type sing_vcs = {
    coinsOnboardingMsg: string,
    enabled: boolean,
    notEnoughCoinsUiVersion: number,
    savingEarlyGivesNoCoins: boolean,
    showCoinsRecTutorial: boolean
}
export type sing_registration = {
    ageGateEnabled: boolean,
    buttonLayout: string,
    carouselStringIds: Array<string>,
    contactsFindFriendsEnabled: boolean,
    emailVerificationEnabled: boolean,
    fbFindFriendsEnabled: boolean,
    lastLoginMethodEnabled: boolean,
    layout: string,
    loginButtonStringId: string,
    loopingImageEnabled: boolean,
    newHandleScreenType: string,
    onboardingFlow: number,
    phoneLoginType: string,
    phoneRegistrationEnabled: boolean,
    registerButtonStringId: string,
    registrationOptions: Array<string>,
    version: number
}
export type sing_arr = {
    logRecCompletedArr: boolean,
    unlockPrice: number
}
export type sing_boost = {
    enableBoostFeature: boolean,
    sku: string
}
export type sing_templates = {
    associations: Array<{
        arrKey: string,
        templateId: string
    }>,
    audioOverrideEnabled: boolean,
    audioOverridesPaywallEnabled: boolean,
    browsingCategories: Array<string>,
    laBrowsingCategories: Array<string>,
    singFlowEnabled: boolean,
    singingFlowTemplatesEnabled: boolean,
    studioPrivacySwitchVisible: boolean
}
export type sing_notifications = {
    activityRevampEnabled: boolean,
    becomeVipButtonEnabled: boolean,
    channelUIEnabled: boolean,
    friendIsLiveNotificationEnabled: boolean,
    giftsTabEnabled: boolean,
    giftsTabEnabledV2: boolean,
    newsCenterEnabled: boolean,
    newsCenterEnabledV2: boolean,
    notificationsFilteringEnabled: boolean,
    preserveFilterSelectionEnabled: boolean
}
export type links = {
    appsEmbed: string,
    cancelSubscriptionAndroid: string,
    cancelSubscriptionIOS: string,
    cancelSubscriptionLearnMore: string,
    cancelSubscriptionWeb: string,
    customerSupport: string,
    defaultSmuleLogo: string,
    domainWhitelist: Array<string>,
    emailShare: string,
    emailSharePerformance: string,
    fbInvite: string,
    fbInviteBanner: string,
    fbLike: string,
    help: string,
    itunesSingEmbed: string,
    patentsEmbed: string,
    privacyEmbed: string,
    smuleHomePage: string,
    songbookHelp: string,
    termOfServiceEmbed: string,
    virtualCurrencyInfo: string
}
export type sing_feed = {
    becomeVipButtonEnabled: boolean,
    socialOnlyEnabled: boolean,
    uiVersion: number
}
export type campfire_avStreamQuality = {
    audiencePlaybackBuffersMax: number,
    audiencePlaybackBuffersMin: number,
    duetVideoHeight: number,
    duetVideoMaxKbps: number,
    duetVideoMinKbps: number,
    duetVideoWidth: number,
    hostVideoMaxKbps: number,
    hostVideoMinKbps: number
}
export type sing_singingFlow = {
    audioRequestFailedDialogFix: boolean,
    audioVisualizerSwitch: string,
    defaultFormType: string,
    defaultLength: string,
    dynamicClientSegmentationEnabled: boolean,
    flowVersion: number,
    headsetAlertMode: string,
    isGuestFlowEnabled: boolean,
    joinersLAPreviewEnabled: boolean,
    laBrowsingCategories: Array<string>,
    lyricsRecyclerViewEnabled: boolean,
    matchAudioOverride: boolean,
    momentsFreeSelectionDuration: {
        min: number,
        max: number
    },
    momentsFreeSelectionEnabled: boolean,
    momentsFriendlyPreSingFV1: boolean,
    momentsFriendlyPreSingFV2: boolean,
    momentsFriendlyPreSingFV3: boolean,
    presingAndReviewLAEnabled: boolean,
    presingVersion: number,
    randomJoinEnabled: boolean,
    reactivateSeedEnabled: boolean,
    separateJoinEnabled: boolean,
    separateJoinSeedsListEnabled: boolean,
    shortOnboardingEnabled: boolean,
    shortOptionEnabled: boolean,
    shortPerfLeadInMs: number,
    shortPerfLeadOutMs: number,
    simpleJoinEnabled: boolean,
    simplifiedSingflowEnabled: boolean,
    singPauseMenuV2Enabled: boolean,
    squareStylesUXEnabled: boolean,
    startOverEnabled: boolean,
    startSingingButtonStyle: number,
    stylesCarouselV2Enabled: boolean,
    swiftEnabled: boolean
}
export type sing_google_songbook = {
    defaultSectionId: string,
    recommendedRemoveSongsEnabled: boolean,
    recommendedSectionFree: boolean,
    recommendedSectionFreeTitle: string
}
export type sing_tipping = {
    tippingProviders: Array<string>
}
export type sing_explore = {
    becomeVipButtonEnabled: boolean,
    momentsPreviewEnabled: boolean,
    momentsPreviewEnabledV2: boolean,
    orderedPlaylists: Array<number>,
    sections: Array<string>,
    seeAllLargeCellsEnabled: boolean
}
export type sing_nowPlaying = {
    audioOnlyViewStyle: string,
    audioVisualizerEnabled: boolean,
    autoJoinFromDuetEnabled: boolean,
    autoplayEnabled: boolean,
    commentLikingEnabled: boolean,
    followButtonEnabled: boolean,
    giftingCoachmarkEnabled: boolean,
    lyricVideosEnabled: boolean,
    nowPlayingGiftVIPDuration: number,
    prebufferingEnabled: boolean,
    showGroupMentionUI: boolean,
    showHeaderUI: boolean,
    uiVersion: number,
    viewStyleSwitchEnabled: boolean
}
export type dfp = {
    groupId: number,
    testId: number
}
export type sing_google_ads = {
    preload_sdks: Array<string>,
    zones: {
        launch: {
            frequency: number,
            timeout: number
        },
        cancel: {
            frequency: number
        },
        postperformance: {
            frequency: number
        },
        "singing.solo": {
            frequency: number
        },
        "singing.seed": {
            frequency: number
        }
    }
}
export type sing_findFriendsModule = {
    placements: {
        feed: {
            startingPosition: number,
            repeatInterval: number
        },
        "songbook.recommended": {
            startingPosition: number,
            repeatInterval: number
        }
    }
}
export type sing_share = {
    branchEnabled: boolean,
    exclusions: Array<string>,
    FBDirect: boolean,
    flexibleTrimmerEnabled: boolean,
    flexibleTrimmerV2Enabled: boolean,
    flexibleTrimmerV3Enabled: boolean,
    igReelsWithAttributionEnabled: boolean,
    igRenderInitialIntervalInSeconds: number,
    igRenderPollingIntervalInSeconds: number,
    igRenderPollingTimeoutInSeconds: number,
    momentsEnabled: boolean,
    shareButtonLayout: string,
    shareButtonOrder: Array<string>,
    shareButtonOrderV2: Array<string>,
    showCommentOnFeed: boolean,
    showCommentOnPlayerBar: boolean,
    snapchatShareOption: string,
    uiVersion: number
}
export type sing_google_preSing = {
    audioMode: string,
    isJoinOnBottom: boolean,
    recTypeScreen: string,
    seedScreenVersion: string
}
export type sing_avqSurvey = {
    rate: number
}
export type sing_shortJoins = {
    audioPreSingEnabled: boolean,
    enabled: boolean,
    inviteListUsesNowPlaying: boolean,
    nowPlayingEnabled: boolean,
    nowPlayingFullSongByDefault: boolean,
    nowPlayingPlaybackMode: string,
    nowPlayingSimplifiedEnabled: boolean,
    preSingEnabled: boolean,
    selectPOIForSinging: boolean
}
export type sing_songbookUsability = {
    filterButtonPlacement: string,
    freeLabelEnabled: boolean,
    searchBarVisible: string,
    songCellType: string
}
export type sing_families = {
    creationBannerEnabled: boolean,
    enabled: boolean,
    iosOnlyNotificationEnabled: boolean
}
export type sing_audio = {
    aaudioLatencyUpdateFrequency: number,
    audioInputMonitorEnabled: boolean,
    audioSystemVersion: number,
    audioWrapperVersion: number,
    autoplayOnReview: boolean,
    backgroundUpload: boolean,
    bluetoothEnabled: boolean,
    defaultSuperpoweredLatency: number,
    deviceOverrides: {
        settings: {
            audioWrapperVersion: number,
            wrapperV0: number
        },
        deviceMachines: string[]
    },
    enablePreSingAudioMonitoring: boolean,
    fileAllocationEnabled: boolean,
    fileWriterBufferSize: number,
    ioThreadOptimizationEnabled: boolean,
    midiAlignmentEnabled: boolean,
    midiAlignmentMinConfidence: number,
    mmapWorkaroundEnabled: boolean,
    monitoringFXConfigEnabled: boolean,
    monitoringParams: {
        knee: number,
        slope: number,
        target: number,
        min: number,
        max: number
    },
    oboeResamplerEnabled: boolean,
    offlineDecoding: boolean,
    openSLVer: number,
    otaBacktrackLevel: number,
    otaLatencyMethod: string,
    overrides: {
        campfireTuning: {
            vbrMin: number,
            vbrMax: number,
            playbackBufferMin: number,
            playbackBufferMax: number
        }
    },
    rtmEnabled: boolean,
    seekGlitchProtectionEnabled: boolean,
    shouldRestartOnSilenceDetected: boolean,
    showMicPermissionsPrompt: boolean,
    usePreGain: boolean,
    voiceCommWorkaroundEnabled: boolean,
    wrapperV0: number,
    wrapperVersion: number,
    writeBuffers: number
}
export type campfire_config = {
    audioOnlyEnabled: boolean,
    creationRequiresVIP: boolean,
    enabled: boolean,
    globalVideoEnabled: boolean,
    groupExperienceEnabled: boolean,
    invitationDialogsEnabled: boolean,
    maxInviteCount: number,
    openSeedsEnabled: boolean,
    previewCellType: string,
    publicExperienceEnabled: boolean,
    saveClipsEnabled: boolean,
    sessionIdentityEnabled: boolean
}
export type sing_cccp = {
    arrVisible: boolean,
    defaultSort: string,
    minTilOld: number,
    showPitchTracks: boolean
}
export type appFamily = {
    apps: string[]
}
export type sing_search = {
    autocompleteDelayMS: number,
    categoricalSearchEnabled: boolean,
    categoricalSearchOrder: string[],
    categoricalSearchV2Enabled: boolean,
    instantSearchDelayMS: number,
    lyricsSearchEnabled: boolean,
    newSearchEnabled: boolean,
    numRecsToFetch: number,
    searchByCategoriesEnabled: boolean,
    searchByCategoriesV2Enabled: boolean,
    v2Enabled: boolean
}
export type sing_localization = {
    forceLocaleSwitcher: {
        enabled: boolean,
        langOrder: string[]
    },
    localeSwitcherEnabled: boolean
}
export type sing_videoEncoding = {
    bitrate: number,
    bitrate360AVC: number,
    bitrate360HEVC: number,
    bitrate480AVC: number,
    bitrate480HEVC: number,
    bitrate720AVC: number,
    bitrate720HEVC: number,
    format: string,
    framerate: number,
    gopDuration: number,
    hdEnabled: boolean,
    resolution: number
}
export type sing_chat = {
    activityStatusEnabled: boolean,
    connectChatOnLogin: boolean,
    enabled: boolean,
    entryShortcutsEnabled: boolean,
    forceUpgrade: boolean,
    maxGroupMembers: number,
    richLinksEnabled: boolean,
    welcomePerfKey: string
}
export type sing_paywall = {
    showV2: boolean,
    stringsGroup: string,
    trialLayout: string,
    trialOfferId: string
}
export type sing_appLaunch = {
    cacheSettings: boolean,
    resumeSession: boolean,
    secureAPI: boolean
}
export type sing_acappella = {
    maxDurationSec: number,
    minDurationSec: number
}
export type sing_google_buy_msg = {
    enough_text: string,
    not_enough_text: string,
    rate_us_count_limit: number
}
export type sing_google_songUpsell = {
    enabled: boolean,
    joinNoUpload: {
        title: string,
        bullets: {
            icon: string,
            text: string
        }[]
    },
    joinUpload: {
        title: string,
        bullets: {
            icon: string,
            text: string
        }[]
    },
    seedNoUpload: {
        title: string,
        bullets: {
            icon: string,
            text: string
        }[]
    },
    seedUpload: {
        title: string,
        bullets: {
            icon: string,
            text: string
        }[]
    },
    soloNoUpload: {
        title: string,
        bullets: {
            icon: string,
            text: string
        }[]
    },
    soloUpload: {
        title: string,
        bullets: {
            icon: string,
            text: string
        }[]
    }
}
export type sing_google_stream_values = {
    demo_interval: number,
    stream_cost: number,
    stream_report_time_interval: number
}
export type sing_google_smeaks = {
    billingObfuscatedIdsEnabled: boolean,
    FTUXSongBookmarkTutorialEnabled: boolean,
    landingScreenLocationRequestEnabled: boolean,
    manageSubscriptionEnabled: boolean,
    ssd: boolean
}
export type sing_audioFilters = {
    config: {
        [key: string]: {
            versionSpec: string
        }
    },
    ctrEnabled: boolean,
    ctrEnabledForDuetJoins: boolean,
    default: string,
    defaultOTA: string,
    order: string[],
    otaConfig: {
        [key: string]: {
            versionSpec: string
        }
    },
    rnnoiseEnabled: boolean,
    vipOnly: string[],
    vocalMonitorConfig: {
        [key: string]: {
            versionSpec: string
        }
    }
}
export type sing_google_mediaPlayer = {
    foregroundServiceEnabled: boolean
}
export type sing_onboarding = {
    autoPlayOnCompletionEnabled: boolean,
    canDeferFTUX: boolean,
    extendedArrPreviewEnabled: boolean,
    flow: string,
    reboardingEnabled: boolean,
    search: boolean,
    skipTopicsEnabled: boolean,
    topics: boolean,
    topicsSource: number,
    tutorialVersion: string,
    upsellLocation: string
}
export type sing_crm = {
    appboyEnabled: boolean
}
export type sing_playlists = {
    performancePaginationEnabled: boolean
}
export type sing_seeds = {
    castJoinAsSeedEnabled: boolean,
    hotListEnabled: boolean,
    paidSeedExtensionEnabled: boolean,
    removeJoinsEntryPoint: "actionsheet",
    reopenSeedsEnabled: boolean
}
export type sing_google_explore = {
    playlistId: number
}
export type sing_banners = {
    armstrongDynamicBannersEnabled: boolean
}
export type sing_google_cccp = {
    arrVisible: boolean,
    defaultSort: string,
    joinVisible: boolean,
    tabNameKey: string
}
export type sing_videoStyles = {
    default: string,
    defaultParticleIntensity: string,
    joinersChoiceEnabled: boolean,
    order: string[],
    particlesEnabled: boolean,
    teaser: string[],
    vip: string[]
}
export type sing_profile = {
    archivedMessageOnTop: boolean,
    becomeVipButtonEnabled: boolean,
    channelSearchDebounceMS: number,
    channelSearchEnabled: boolean,
    defaultChannelLayout: string,
    familiesEnabled: boolean,
    getVerifiedButtonEnabled: boolean,
    multiplePerformancePinningEnabled: boolean,
    perfSortingEnabled: boolean,
    playlistsEnabled: boolean,
    profileStatsEnabled: boolean,
    profileViewsEnabled: boolean,
    storageBannerV2: boolean,
    storageLimit: number,
    storageLimitV2: number,
    uiVersion: number,
    verifiedBadgeUnmetCriteria: boolean,
    version: number,
    vipGiftingCoachmarkEnabled: boolean
}
export type sing_google_tutorial = {
    headphoneReminder: boolean,
    numberOfFreePlays: number,
    showSongbookTips: boolean,
    tutorialSongDoMiSo: boolean
}
export type sing_video = {
    faceTrackingEnabled: boolean,
    groupJoinLimit: number,
    nonVIPCreateLimit: number,
    numFreeJoins: number,
    singleEGLContext: boolean,
    singleEGLContextVersion: number,
    uploadRequestTimeoutSecs: number,
    uploadSliceSizeKB: number,
    uploadTimeoutSecs: number,
    uploadWifiOnly: {
        enabled: boolean,
        timeoutSec: number,
        reminderDialogThreshold: number
    },
    uploadWifiOnlySetting: boolean,
    wifiOnlyUploadTimeoutSecs: number
}
export type sing_virtualCurrency = {
    coinPackImageVersion: number,
    coinWalletDesignVersion: number,
    directGiftingEnabled: boolean,
    giftFOMOEnabled: boolean,
    giftIconBounceIntervalSec: number,
    giftingEnabled: boolean,
    giftSearchEnabled: boolean,
    giftTagsEnabled: boolean,
    highlightLiveJamGiftIcon: boolean,
    highlightNowPlayingGiftIcon: boolean,
    liveJamGiftingEnabled: boolean,
    messageCarouselEnabled: boolean,
    minibarGiftingEnabled: boolean,
    purchasingEnabled: boolean,
    seedExtensionCoachmarkEnabled: boolean,
    seedExtensionEnabled: boolean,
    seedExtensionInfoEnabled: boolean,
    showBonusCoinsInPacks: boolean,
    vipGiftingBulkLimit: number,
    vipGiftingEnabled: boolean,
    vipGiftingInGroupsEnabled: boolean,
    walletLayout: string
}
export type sing_upload = {
    requestTimeoutSec: number,
    timeoutSec: number,
    usePerformanceUploadManager: boolean,
    usePerformanceUploadManager2: boolean,
    videoSliceSizeKB: number,
    wifiOnly: {
        enabled: boolean,
        timeoutSec: number,
        reminderDialogThreshold: number
    }
}
export type sing_topics = {
    validationEnabled: boolean
}
//#endregion
