import { scraperApi } from '../xhr/rtk'
import { SCRAPER_TWEET_URL, SCRAPER_TWEETS_URL } from './constants.js'

export const tweetsApi = scraperApi.injectEndpoints({
    endpoints: (build) => ({
        fetchTweet: build.query({
            query: (params) => ({
                url: SCRAPER_TWEET_URL,
                method: 'GET',
                params,
            }),
        }),
        fetchTweets: build.query({
            query: (params) => ({
                url: SCRAPER_TWEETS_URL,
                method: 'GET',
                params,
            }),
        }),
    }),
})

export const {
    useFetchTweetQuery,
    useFetchTweetsQuery,
    useLazyFetchTweetsQuery,
} = tweetsApi
