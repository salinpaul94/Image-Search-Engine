const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;
const baseUrl = "https://api.unsplash.com/search/photos?page=";
const queryUrl = "&query="
const apiKeyUrl = "&client_id=8PRX7SZs2ccESPfdmY_dJI831Wa0DOqVaHnuMWFcyXA";

async function searchImages() {
  keyword = searchBox.value;
  const url = baseUrl + page + queryUrl + keyword + apiKeyUrl;

  const response = await fetch(url);
}
