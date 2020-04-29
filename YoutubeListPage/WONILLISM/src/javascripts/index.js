import * as api from "../lib/api.js";

const getCategories = async () => {
    // get video category info
    const response = await api.getCategoriesAPI();  
    const categoryData = response.items;
    
    
    const checkboxWrap = document.querySelector(".checkbox-wrap");

    // mapping categories (templating)
    let html_item = "";
    categoryData.map( item=>{
        let templateCategory = document.querySelector("#template-category").innerHTML;

        html_item +=templateCategory.replace("{title}", item.snippet.title)
        .replace("{id}",item.id);
    })
    checkboxWrap.innerHTML += html_item;
    
    //getItemList(categoryData);
}
const getItemList =async(categories)=>{
    const itemWrap = document.querySelector(".item-wrap");
    const id = categories[0].id
    const response = await api.getItemAPI(id);
    const items = response.items;


    let html_item = "";
    items.map(item =>{
        let templateItem=document.querySelector("#template-item").innerHTML;
        html_item += templateItem.replace("{item_title}",item.snippet.title);
    })
    itemWrap.innerHTML +=html_item;
}

function init(){
    getCategories();    
}
init();

//window.addEventListener('DOMContentLoaded', checkboxHandler);

