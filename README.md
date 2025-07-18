# Smule API

initially hard coded inside of [smule-desktop](https://github.com/michei69/smule-desktop), but i've decided
to release it separately too.

HEAVY WIP --- HOBBY PROJECT

This project is in a _usable_ state, although many things are subject to change. Expect major updates, re-implementations, renames, or breaking changes, without a major version change.

Check some parts of the roadmap, or report issues [here](https://github.com/michei69/smule-api/issues)

# Installing

This project is currently hosted on npm, therefore all major package manager are able to install it

`npm install smule.js` / `pnpm install smule.js` / `bun install smule.js`

# How to use?

###### !!! Structure may differ version-to-version, as i tend to be indecesive when it comes to placing certain functions

The library exports a `Smule` class, for the mobile api, and a `SmuleDotCom` class, for the website api. Generally speaking, the mobile api is more powerful than the website one.

It is structured based on "fake objects", therefore account-related functions will generally be found under `Smule.account`.

```js
import { Smule, SmuleUtil } from "smule.js"

const smule = new Smule()
// Login as a guest
smule.account.loginAsGuest().then(async () => {
    // Fetch the main songbook page
    const songbook = await smule.songs.fetchSongbook()

    // Fetch a specific arrangement
    const song = await smule.songs.fetchOne("some_smule_arrangement_id")

    // Get the mp3 file url
    const mp3url = SmuleUtil.getFilesFromArr(song.arrVersion).song_file

    // Fetch a specific arrangement's time-synced lyrics and/or pitches automatically
    const { lyrics, pitches, type } = await smule.songs.fetchLyricsAndPitches("some_smule_arrangement_id")
})

// Login with an account
smule.account.login("your@email.com", "yourPass").then(async () => {
    // Fetch a published performance
    const { performance } = await smule.performances.fetchOne("some_smule_performance_id")

    // Comment on a performance
    const response = await smule.social.createComment(performance.performanceKey, "hello from javascript!")
})
```

... and much more! Check out [the main Smule file](./src/smule.ts) for all available interactions.

###### P.S. Naming schemes, just like in smule-desktop, aren't stabilised. In some places, _arrangements_ will be mentioned as _songs_. This will be fixed in future updates, eventually (maybe :3)