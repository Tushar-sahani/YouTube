const GOOGLE_API_KEY = "{YOUR_API_KEY}";
export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=in&key="+GOOGLE_API_KEY;

export const YOUTUBE_SUGGESTION = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const RELATED_VIDEO = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${GOOGLE_API_KEY}&relatedToVideoId=`;
export const Video_INFO = `https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&key=${GOOGLE_API_KEY}&id=`
export const CHANNEL_INFO =  `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&key=${GOOGLE_API_KEY}&id=`
// export const CHANNEL_INFO =  `https://www.googleapis.com/youtube/v3/channels?part=snippet&key=${GOOGLE_API_KEY}&id=`
export const SEARCH_RESULT = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${GOOGLE_API_KEY}&q=`
export const VIDEO_COMMENT = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&key=${GOOGLE_API_KEY}&videoId=`
