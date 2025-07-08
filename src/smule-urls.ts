export namespace SmuleUrls {
    export const normalHost = 'api-sing.smule.com'
    export const betaHost = 'api-beta.smule.com'

    // I should seriously take those from the /login/refresh response
    // but im lazyyy :3
    export const userChat = 'j.smule.com'
    export const cfireChat = 'jc.smule.com'
    
    export const baseUrl = 'https://api-sing.smule.com/v2'
    


    // /access
    export const AccessToken = baseUrl + '/access/token';
    
    // /account
    export const AccountExplore = baseUrl + '/account/explore';
    export const AccountInfo = baseUrl + '/account/info';
    export const AccountLookup = baseUrl + '/account/lookup';
    export const AccountProfileStats = baseUrl + '/account/profile/stats'
    export const AccountProfileStatsViews = baseUrl + '/account/profile/stats/views'
    export const AccountProfileStatsDrilldownAccounts = baseUrl + '/account/profile/stats/drilldown/accounts';
    export const AccountProfileStatsDrilldownPerformances = baseUrl + '/account/profile/stats/drilldown/performances';
    export const AccountStatisticsYearly = baseUrl + '/account/statistics/yearly'
    export const AccountWallet = baseUrl + '/account/wallet';
    
    // /aplist
    export const AplistList = baseUrl + '/aplist/list';
    
    // /arr
    export const Arr = baseUrl + '/arr';
    export const ArrActionAfterSing = baseUrl + '/arr/actionAfterSing';
    export const ArrBookmark = baseUrl + '/arr/bookmark';
    export const ArrBookmarkList = baseUrl + '/arr/bookmark/list';
    export const ArrBookmarkRemove = baseUrl + '/arr/bookmark/remove';
    export const ArrByKeys = baseUrl + '/arr/byKeys';
    export const ArrCreate = baseUrl + '/arr/create';
    export const ArrDelete = baseUrl + '/arr/delete';
    export const ArrDetail = baseUrl + '/arr/detail';
    export const ArrFromRSong = baseUrl + '/arr/fromrsong';
    export const ArrList = baseUrl + '/arr/list';
    export const ArrOwned = baseUrl + '/arr/owned';
    export const ArrPlay = baseUrl + '/arr/play';
    export const ArrResourceCreate = baseUrl + '/arr/resource/create';
    export const ArrUpdate = baseUrl + '/arr/update';
    export const ArrVerCreate = baseUrl + '/arr/ver/create';
    export const ArrVote = baseUrl + '/arr/vote';
    export const ArrVoteTopic = baseUrl + '/arr/voteTopic';

    
    // /avtemplate
    export const AvtemplateCategoryList = baseUrl + '/avtemplate/category/list';
    export const AvtemplateMixlistRec = baseUrl + '/avtemplate/mixlist/rec';
    
    // /banner
    export const Banner = baseUrl + '/banner';
    
    // /boost
    export const Boost = baseUrl + '/boost';
    export const BoostPerf = baseUrl + '/boost/perf';
    
    // /card
    export const CardCreate = baseUrl + '/card/create';
    export const CardGet = baseUrl + '/card/get';
    
    // /category
    export const Category = baseUrl + '/category';
    export const CategoryList = baseUrl + '/category/list';
    
    // /cfire
    export const CfireList = baseUrl + '/cfire/list';
    export const CfireSync = baseUrl + '/cfire/sync';

    // /comment
    export const CommentLike = baseUrl + '/comment/like'
    export const CommentLikes = baseUrl + '/comment/likes'
    export const CommentUnlike = baseUrl + '/comment/unlike'
    
    // /dvcset
    export const Dvcset = baseUrl + '/dvcset';

    // /discovery
    export const DiscoveryPerfByAvTemplateList = baseUrl + '/discovery/perf/byAvTemplate/list';
    export const DiscoveryPerfList = baseUrl + '/discovery/perf/list';
    export const DiscoveryPerfListByAvTemplate = baseUrl + '/discovery/perf/listByAvTemplate';
    
    // /fb
    export const FbConnect = baseUrl + '/fb/connect';
    export const FbDisconnect = baseUrl + '/fb/disconnect';
    export const FbFriendFind = baseUrl + '/fb/friend/find';
    export const FbLogin = baseUrl + '/fb/login';
    
    // /gift
    export const GiftGiveVip = baseUrl + '/gift/give/vip';
    export const GiftList = baseUrl + '/gift/list';
    
    // /invite
    export const InviteChat = baseUrl + '/invite/chat';
    export const InviteFollower = baseUrl + '/invite/follower';
    export const InviteList = baseUrl + '/invite/list';
    export const InviteMe = baseUrl + '/invite/me';
    export const InviteSend = baseUrl + '/invite/send';

    // /login
    export const LoginGuest = baseUrl + '/login/guest';
    export const LoginHuaweiid = baseUrl + '/login/huaweiid';
    export const LoginInfo = baseUrl + '/login/info';
    export const LoginPhone = baseUrl + '/login/phone';
    export const LoginPhonePinResend = baseUrl + '/login/phone/pin/resend';
    export const LoginPhonePinSend = baseUrl + '/login/phone/pin/send';
    export const LoginRefresh = baseUrl + '/login/refresh'
    
    // /loc
    export const LocResource = baseUrl + '/loc/resource';
    
    // /offer
    export const Offer = baseUrl + '/offer';
    
    // /oauth2
    export const Oauth2Authorize = baseUrl + '/oauth2/authorize';
    export const Oauth2Info = baseUrl + '/oauth2/info';

    // /performance && /perf - Performance related stuff
    export const PerfCreate = baseUrl + '/perf/create';
    export const PerfJoin = baseUrl + '/perf/join';
    export const PerfPreupload = baseUrl + '/perf/preupload';
    export const PerfUpdate = baseUrl + '/perf/update';
    export const PerfUploadVideo = baseUrl + '/perf/uploadVideo';
    export const PerformanceUrl = baseUrl + '/performance';
    export const PerformanceBookmarkSeed = baseUrl + '/performance/bookmarkSeed';
    export const PerformanceBookmarkSeedUpdate = baseUrl + '/performance/bookmarkSeed/update';
    export const PerformanceByKeys = baseUrl + '/performance/byKeys';
    export const PerformanceByPerformer = baseUrl + '/performance/byPerformer';
    export const PerformanceCastAsSeed = baseUrl + '/performance/castAsSeed';
    export const PerformanceChildren = baseUrl + '/performance/children';
    export const PerformanceChildrenSocial = baseUrl + '/performance/children/social';
    export const PerformanceComment = baseUrl + '/performance/comment';
    export const PerformanceCommenters = baseUrl + '/performance/commenters';
    export const PerformanceCommentingInfo = baseUrl + '/performance/commenting/info';
    export const PerformanceCommentReportAbuse = baseUrl + '/performance/commentReportAbuse';
    export const PerformanceConnected = baseUrl + '/performance/connected';
    export const PerformanceDelete = baseUrl + '/performance/delete';
    export const PerformanceDeleteComment = baseUrl + '/performance/deleteComment';
    export const PerformanceGetComments = baseUrl + '/performance/getComments'
    export const PerformanceGetLoves = baseUrl + '/performance/getLoves';
    export const PerformanceIsBookmarkSeed = baseUrl + '/performance/isBookmarkSeed';
    export const PerformanceJoiners = baseUrl + '/performance/joiners';
    export const PerformanceLimits = baseUrl + '/performance/limits';
    export const PerformanceList = baseUrl + '/performance/list';
    export const PerformanceListRec = baseUrl + '/performance/list/rec';
    export const PerformanceListSeeds = baseUrl + '/performance/list/seeds';
    export const PerformanceListDetails = baseUrl + '/performance/listDetails';
    export const PerformanceLists = baseUrl + '/performance/lists';
    export const PerformanceListsRec = baseUrl + '/performance/lists/rec';
    export const PerformanceListen = baseUrl + '/performance/listen';
    export const PerformanceListenStart = baseUrl + '/performance/listenStart'
    export const PerformanceLogRecCompletedArr = baseUrl + '/performance/logRecCompletedArr';
    export const PerformanceLove = baseUrl + '/performance/love'
    export const PerformanceNetwork = baseUrl + '/performance/network';
    export const PerformanceParts = baseUrl + '/performance/parts';
    export const PerformancePlay = baseUrl + '/performance/play'
    export const PerformanceRecentTracks = baseUrl + '/performance/recentTracks';
    export const PerformanceRender = baseUrl + '/performance/render';
    export const PerformanceRenderTrimmed = baseUrl + '/performance/render/trimmed';
    export const PerformanceReportAbuse = baseUrl + '/performance/reportAbuse';
    export const PerformanceSearchByTag = baseUrl + '/performance/search/byTag';
    export const PerformanceSeedExtend = baseUrl + '/performance/seed/extend';
    export const PerformanceShow = baseUrl + '/performance/show';
    export const PerformanceTracks = baseUrl + '/performance/tracks';
    export const PerformanceTracksDelete = baseUrl + '/performance/tracks/delete';
    export const PerformanceUnvote = baseUrl + '/performance/unvote';
    export const PerformanceUpnext = baseUrl + '/performance/upnext';
    export const PerformanceVote = baseUrl + '/performance/vote';
    export const PerformanceVoting = baseUrl + '/performance/voting';
    export const getPerformanceUploadUrl = (hostName: string) => 'https://' + hostName + '/v2/perf/upload';

    // /pref
    export const Pref = baseUrl + '/pref';
    export const PrefUpdate = baseUrl + '/pref/update';

    // /playlist
    export const PlaylistExplore = baseUrl + '/playlist/explore';
    export const PlaylistGet = baseUrl + '/playlist/get';
    
    // /pushToken
    export const PushTokenRegister = baseUrl + '/pushToken/register';
    
    // /profile
    export const ProfileSearch = baseUrl + '/profile/search';
    export const ProfileSearchAutocomplete = baseUrl + '/profile/search/autocomplete';

    // /rec
    export const RecAccount = baseUrl + '/rec/account';
    export const RecAcct = baseUrl + '/rec/acct';
    export const RecCompLocale = baseUrl + '/rec/comp/locale';
    export const RecCompSimilar = baseUrl + '/rec/comp/similar';
    export const RecSelect = baseUrl + '/rec/select';
    export const RecTsrch = baseUrl + '/rec/tsrch';

    // /settings
    export const Settings = baseUrl + '/settings';

    // /social
    export const SocialActivityFeed = baseUrl + '/social/activityFeed';
    export const SocialBlockList = baseUrl + '/social/block/list';
    export const SocialBlockUpdate = baseUrl + '/social/block/update';
    export const SocialFeed = baseUrl + '/social/feed';
    export const SocialFeedList = baseUrl + '/social/feed/list'
    export const SocialFollowee = baseUrl + '/social/followee';
    export const SocialFolloweeUpdate = baseUrl + '/social/followee/update'
    export const SocialFollower = baseUrl + '/social/follower';
    export const SocialFollowerByActiveness = baseUrl + '/social/follower/byActiveness';
    export const SocialInfo = baseUrl + '/social/info';
    export const SocialIsFollowing = baseUrl + '/social/isFollowing'
    export const SocialMyFeed = baseUrl + '/social/myFeed';
    export const SocialNotificationActivity = baseUrl + '/social/notification/activity';
    export const SocialNotificationList = baseUrl + '/social/notification/list';
    export const SocialNotificationLookup = baseUrl + '/social/notification/lookup';
    export const SocialNotificationNewCounts = baseUrl + '/social/notification/new/counts';
    
    // /songbook
    export const Songbook = baseUrl + '/songbook';
    export const SongbookGuest = baseUrl + '/songbook/guest';
    export const SongbookUpdate = baseUrl + '/songbook/update';

    // /store
    export const StoreCreditPlans = baseUrl + '/store/credit/plans';
    export const StorePlayerEntitlementList = baseUrl + '/store/player/entitlement/list';
    export const StoreProductReward = baseUrl + '/store/product/reward';
    export const StoreRewardCoins = baseUrl + '/store/rewardCoins';
    export const StoreSubscriptionStatus = baseUrl + '/store/subscription/status';
    export const StoreStreamLog = baseUrl + '/store/stream/log';
    export const StoreSubscriptionUpdate = baseUrl + '/store/subscription/update';
    
    // /spark
    export const SparkPushMuteState = baseUrl + '/spark/push/mutestate';
    export const SparkChatOffline = baseUrl + '/spark/chat/offline';
    export const SparkChatUpdate = baseUrl + '/spark/chat/update';

    // /sing
    export const SingCoverPhotoDelete = baseUrl + '/sing/coverPhoto/delete';
    export const SingCoverPhotoUpload = baseUrl + '/sing/coverPhoto/upload';
    export const SingOpenCallGet = baseUrl + '/sing/opencall/get';
    export const SingOpenCallGetByPlayer = baseUrl + '/sing/opencall/getByPlayer';
    export const SingOpenCallGetBySong = baseUrl + '/sing/opencall/getBySong';
    export const SingOpenCallGetSuggested = baseUrl + '/sing/opencall/getSuggested';
    export const SingOpenCallSetPrivacy = baseUrl + '/sing/opencall/setPrivacy';
    export const SingPerfOpenCallByPlayer = baseUrl + '/sing/perfOpencall/byPlayer';
    export const SingProfileUpdate = baseUrl + '/sing/profile/update';
    export const SingUserProfile = baseUrl + '/sing/user/profile';
    export const SingUserProfileMe = baseUrl + '/sing/user/profile/me';

    // /sfam
    export const SfamList = baseUrl + '/sfam/list';
    export const SfamListByAcctRoles = baseUrl + '/sfam/list/byAcct/roles';
    
    // /search
    export const Search = baseUrl + '/search'
    export const SearchAutocomplete = baseUrl + '/search/autocomplete'
    export const SearchGlobal = baseUrl + '/search/global'
    export const SearchSongbook = baseUrl + '/search/songbook';
    export const SearchSongbookAutocomplete = baseUrl + '/search/songbook/autocomplete';

    // /studio
    export const StudioPerformance = baseUrl + '/studio/performance';
    export const StudioPerformanceByPerformer = baseUrl + '/studio/performance/byPerformer';
    export const StudioPerformanceChildren = baseUrl + '/studio/performance/children';
    export const StudioPerformanceList = baseUrl + '/studio/performance/list';
    export const StudioSearchSegPerf = baseUrl + '/studio/search/segPerf';

    // /topic
    export const Topic = baseUrl + '/topic';
    export const TopicChoose = baseUrl + '/topic/choose';
    export const TopicOnboarding = baseUrl + '/topic/onboarding';
    export const TopicOption = baseUrl + '/topic/option';
    export const TopicSelect = baseUrl + '/topic/select';

    // /track
    export const TrackUploadAudio = baseUrl + '/track/uploadAudio';
    export const TrackUploadAudioResource = baseUrl + '/track/uploadAudioResource';
    export const TrackUploadTrackAudio = baseUrl + '/track/uploadTrackAudio';
    export const TrackUploadVideo = baseUrl + '/track/uploadVideo';

    // /user
    export const UserActivationSend = baseUrl + '/user/activation/send';
    export const UserBlurb = baseUrl + '/user/blurb';
    export const UserBlurbUpdate = baseUrl + '/user/blurb/update';
    export const UserConnectedPhone = baseUrl + '/user/connectedPhone';
    export const UserDeviceLogin = baseUrl + '/user/device/login';
    export const UserDeviceLookup = baseUrl + '/user/device/lookup';
    export const UserEmailExistingCodeSend = baseUrl + '/user/email/existing/code/send';
    export const UserEmailExistingConfirm = baseUrl + '/user/email/existing/confirm';
    export const UserEmailExistingResend = baseUrl + '/user/email/existing/resend';
    export const UserEmailRegisterComplete = baseUrl + '/user/email/register/complete';
    export const UserEmailRegisterResend = baseUrl + '/user/email/register/resend';
    export const UserEmailUpdateConfirm = baseUrl + '/user/email/update/confirm';
    export const UserEmailUpdateResend = baseUrl + '/user/email/update/resend';
    export const UserEmailRegister = baseUrl + '/user/emailRegister';
    export const UserGoogleLogin = baseUrl + '/user/google/login';
    export const UserGuestLogin = baseUrl + '/user/guestLogin';
    export const UserInit = baseUrl + '/user/init';
    export const UserLogin = baseUrl + '/user/login';
    export const UserLookup = baseUrl + '/user/lookup';
    export const UserPasswordReset = baseUrl + '/user/password/reset';
    export const UserProfileUpdate = baseUrl + '/user/personal/update';
    export const UserPhoneConnect = baseUrl + '/user/phone/connect';
    export const UserPictureDelete = baseUrl + '/user/picture/delete';
    export const UserProfile = baseUrl + '/user/profile';
    export const UserSearchByHandle = baseUrl + '/user/search/byHandle';
    export const UserTippingUpdate = baseUrl + '/user/tipping/update';
    export const UserTippingHandleDelete = baseUrl + '/user/tipping/handle/delete';
    export const UserTippingHandleUpdate = baseUrl + '/user/tipping/handle/update';
    export const UserUpdate = baseUrl + '/user/update';
    export const UserUploadPicture = baseUrl + '/user/uploadPicture';
}