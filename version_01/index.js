const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;
const url = "https://api.unsplash.com/search/photos?page=1&query=";
const apiKeyUrl = "&client_id=8PRX7SZs2ccESPfdmY_dJI831Wa0DOqVaHnuMWFcyXA";

async function searchImages() {
  keyword = searchBox.value;
}
