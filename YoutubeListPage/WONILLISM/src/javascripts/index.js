import * as api from "../lib/api.js";

const getCategories = async () => {
    const response = await api.getCategoriesAPI();
    const categoryData = response.items;
    const categories = document.querySelector(".categories");

    let html_item = "";
    categoryData.map( item=>{
        let templateCategory = document.querySelector("#template-category").innerHTML;

        //console.log(item.snippet);
        html_item +=templateCategory.replace("{title}", item.snippet.title)
        .replace("{id}",item.snippet.channelId);
    })
    categories.innerHTML += html_item;
}
const getList =async()=>{
    const res = await api.getChennelInfoAPI();
    console.log(res);
}

function init(){
    getCategories();
    getList();
}
init();

