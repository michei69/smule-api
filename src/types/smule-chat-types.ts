export type SmuleMessage = {
    content: string,
    sender: number, // UUID, not JID
    id?: string,
    performanceKey?: string
}
export type SmuleChatContainer = {
    messages: Array<SmuleMessage>
}
export type SmuleChatState = "closed" | "closing" | "open" | "opening" | "online" | "offline" | "connected" | "connecting" | "disconnected" | "disconnecting"
export type SmulePartnerStatus = "active" | "composing" | "paused" | "inactive" | "gone"

export type SmuleLiveChatUser = {
    id: number,
    role: SmuleLiveChatRole,
    affiliation: SmuleLiveChatAffiliation
}
export type SmuleLiveChatRole = "moderator" | "participant"
export type SmuleLiveChatAffiliation = "none" | "admin"