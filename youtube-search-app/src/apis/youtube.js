import axios from "axios";
// this key created for demo purpose no need to worry about it :)
const KEY = "AIzaSyAYvZJH0yUb3INrAO0xUPUoL0fSE_26pAY";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        type: "video"
    }
});