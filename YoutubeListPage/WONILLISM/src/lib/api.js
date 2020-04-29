import { APP_KEY } from "../key/appkey.js";

const API_HOST = "https://www.googleapis.com/youtube/v3";

export const getCategoriesAPI = () =>{
    return fetch(
        `${API_HOST}/videoCategories?part=snippet&regionCode=KR&key=${APP_KEY}`,
        {
            method:"GET",
            headers:{
                "Content-Type": "application/json"
            }
        }
    )
    .then(response => response.json())
}

export const getItemAPI = (id) =>{
    return fetch(
        `${API_HOST}/videos?part=snippet&chart=mostPopular&regionCode=KR&videoCategoryId=0&key=${APP_KEY}`,
        {
            method:"GET",
            headers:{
                "Content-Type": "application/json"
            }
        }
    ).then(response => response.json());    
}