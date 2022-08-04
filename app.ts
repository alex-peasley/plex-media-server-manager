import { PMS, Section } from 'plex-sdk'

const pms = new PMS(
    'https://your-plex-media-server.com:32400',
    'tokenObtainedFromPlexClient'
)

// If the token was not set in the constructor
pms.setAuthorization('tokenObtainedFromPlexClient')

pms.library.allSections().then((response: AllSectionsResponse) => {
    // Do something with the Sections

    return pms.library.allSectionItems(response.MediaContainer.Directory[0].key)
}).then((response: AllSectionItemsResponse) => {
    // list section items (movies, tv shows...)
    console.log(response.MediaContainer.Metadata)
})