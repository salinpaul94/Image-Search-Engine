const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;
const baseUrl = "https://api.unsplash.com/search/photos?page=";
const queryUrl = "&query=";
const apiKeyUrl = "&client_id=8PRX7SZs2ccESPfdmY_dJI831Wa0DOqVaHnuMWFcyXA";
const imagePerPageUrl = "&per_page=";
const imagePerPage = "12";

async function searchImages() {
  keyword = searchBox.value;
  const url =
    baseUrl +
    page +
    queryUrl +
    keyword +
    apiKeyUrl +
    imagePerPageUrl +
    imagePerPage;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });
  showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});
