interface Thumbnail {
    url: string,
    width: number,
    height: number,
}

// interface Statistics<Type> {
//     viewCount: string,
//     likeCount: string,
//     dislikeCount: string,
//     favoriteCount: string,
//     commentCount: string,
// }

interface Statistics<Type> {
    viewCount: Type,
    likeCount: Type,
    dislikeCount: Type,
    favoriteCount: Type,
    commentCount: Type,
}

type ThumbnailsItem = 'default' | 'medium' | 'high' | 'standard' | 'maxres'

interface VideoItem {
    kind: string,
    etag: string,
    id: string,
    snippet: {
        publishedAt: string,
        channelId: string,
        title: string,
        description: string,
        thumbnails: {
            // [key: string]: Thumbnail,
        default: Thumbnail,
        medium: Thumbnail,
        high: Thumbnail,
        standard: Thumbnail,
        maxres: Thumbnail,
      },
      channelTitle: string,
      tags: string[],
      categoryId: string,
      liveBroadcastContent: string,
      localized: {
        title: string,
        description: string,
      },
      defaultAudioLanguage: string,
    },
    statistics: Statistics<string>,
}

interface Response {
    kind: string,
    etag: string,
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    },
    items: VideoItem[],
  }
