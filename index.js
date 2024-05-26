const apiKey = "43666d36";

const searchInput = document.getElementById("searchInput");
const button = document.getElementById("button");
const section2 = document.getElementById("section2");
 let page = 1
// debounce function.......................................
 function debounce(func, delay){
  let timeoutId;
  return function(){
    const context = this;
    const args = arguments;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function(){
      func.apply(context, args);
    }, delay);
  };
 }
//  ......................................................

// infinite scroll........................................
window.addEventListener("scroll", function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    search();
  }
});
// .......................................................

async function search(){
    try{
      const searchValue = searchInput.value;
    const apiUrl =  `http://www.omdbapi.com/?i=tt3896198&apikey=43666d36&s=${searchValue}&page=${page}`
    let movieNo = 0;
    let result;

      const response = await fetch(apiUrl);

      const data = await response.json();
      result = data.Search;
    

    if(page===1){
      section2.innerHTML = "";
    }
    document.querySelector(".section2").style.display = "flex";
    document.querySelector(".section3").style.display = "none";
    result.map(async(ele)=>{
        console.log(ele);
      const title = ele.Title;
      const type = ele.Type;
      const poster = ele.Poster;
      const year = ele.Year;
      const imdbId = ele.imdbID;
      const rating = await imdbRating(imdbId);

      const movieDiv = document.createElement("div");
      movieDiv.classList.add("movieDiv");
      movieDiv.innerHTML = `
      <div class="oneMovie">
      <a href="./next/index.html?param1=${imdbId}">
        <img class="movieImage" src="${poster}" alt="${title}">
      </a>
      <div class="movieDetails">
      <h3 class="">Title: ${title}</h3>
      <h3 class="">Release year: ${year}</h3>
      <h3 class="">Rating: ${rating}/10</h3>
      <h3 class="">Type: ${type}</h3>
      </div>
        </div>
      `
      section2.appendChild(movieDiv);
    changetheme();
    })
    page++;

    async function imdbRating(){
      if (data.Response === "True" && data.Search) {
        const firstResult = data.Search[movieNo];
        movieNo++;

    
        if (firstResult.imdbID) {
          const movieDetailsUrl = `http://www.omdbapi.com/?apikey=${apiKey}&i=${firstResult.imdbID}`;
          const detailsResponse = await fetch(movieDetailsUrl);
          const detailsData = await detailsResponse.json();
          const rating1 = detailsData.imdbRating;
          return rating1;
        }
      }
    }
    // kkkkkkkkkkkkkkk
  }catch(error){
      console.error("not getting:")
      alert("movie not here")
    }
    // llllllllllllllll
}

button.addEventListener("click", () =>{
  page = 1;
  section2.innerHTML = "";
  search();
});

const debouncedSearch = debounce(search, 500);

searchInput.addEventListener("keyup", () =>{
  section2.innerHTML = "";
    page = 1;
    debouncedSearch();
});

const theme1 = document.getElementById("select1");
theme1.addEventListener("change", changetheme)

  function changetheme(){
    const blackDetails = document.querySelectorAll(".movieDetails");
  if(theme1.value==="Dark"){
    document.querySelector(".h1").style.color = "white";
    document.querySelector(".section1").style.backgroundColor = "black";
    document.querySelector(".footer").style.backgroundColor = "black";
    document.querySelector(".section2").style.backgroundColor = "black"
    document.querySelector(".oneMovie").style.backgroundColor = "black"
    blackDetails.forEach((ele) =>{
      ele.style.backgroundColor = "black";
    });

  }else if(theme1.value==="Light"){
    document.querySelector(".h1").style.color = "black";
    document.querySelector(".section1").style.backgroundColor = "aqua";
    document.querySelector(".footer").style.backgroundColor = "aquamarine";
    document.querySelector(".section2").style.backgroundColor = "rgb(208, 216, 222)";
    document.querySelector(".oneMovie").style.backgroundColor = "rgb(77, 77, 253)";
    document.querySelector(".movieDetails").style.backgroundColor = "";
  }
}