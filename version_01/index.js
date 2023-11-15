const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;
const url = "https://api.unsplash.com/search/photos?page=1&query=";

async function searchImages() {
  keyword = searchBox.value;
  
}
