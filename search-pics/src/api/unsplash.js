import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID vVoh8kPY00S4LO_7QaD3nyszA4jFI2x049RTgucDyes",
    },
});
