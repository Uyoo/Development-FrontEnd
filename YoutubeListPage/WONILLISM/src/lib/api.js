import { APP_KEY } from "../key/appkey.js";

const API_HOST = "https://www.googleapis.com/youtube/v3";

export const getCategoriesAPI = () =>{
    return fetch(
        `${API_HOST}/guideCategories?part=snippet&regionCode=KR&key=${APP_KEY}`,
        {
            method:"GET",
            headers:{
                "Content-Type": "application/json"
            }
        }
    )
    .then(response => response.json())
}

export const getChennelInfoAPI = () =>{
    return fetch(
        `${API_HOST}/playlists?part=snippet&id=UCBR8-60-B28hp2BmDPdntcQ&key=${APP_KEY}`,
        {
            method:"GET",
            headers:{
                "Content-Type": "application/json"
            }
        }
    ).then(response => response.json());
}