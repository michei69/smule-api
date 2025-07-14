export enum SmuleUserSinging {
    BOTH,
    PART_ONE,
    PART_TWO,

    // TODO: implement eventually
    PART_THREE,
    PART_FOUR,
    PART_FIVE,
    PART_SIX,
    PART_SEVEN,
    PART_EIGHT
}

export type SmuleSyllable = {
    text: string,
    startTime: number,
    endTime: number
}
export type SmuleLyric = {
    text: Array<SmuleSyllable>,
    startTime: number,
    endTime: number,
    part: SmuleUserSinging
}
export type SmuleMidiData = {
    lyrics: Array<SmuleLyric>,
    pitches: SmulePitchesData,
    isSyllable: boolean,
    type: "RAVEN" | "COMMUNITY"
}
export type SmuleLyricsData = {
    lyrics: Array<SmuleLyric>,
    isSyllable: boolean
}

export type SmulePitch = {
    noteNumber: number,
    startTime: number,
    endTime: number,
    part: SmuleUserSinging | number
}
export type SmulePitchesData = {
    pitches: SmulePitch[],
    largestNote: number,
    smallestNote: number
}