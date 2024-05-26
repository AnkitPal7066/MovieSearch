const apiKey = "43666d36";

const urlParams = new URLSearchParams(window.location.search);
const param1 = urlParams.get("param1"); 
      
async function imdbRating1(){
        const movieDetailsUrl = `http://www.omdbapi.com/?apikey=${apiKey}&i=${param1}`;
        const detailsResponse = await fetch(movieDetailsUrl);
        const detailsData = await detailsResponse.json();
        
        const image = document.querySelector(".image").src = detailsData.Poster;
        const title = document.querySelector(".title").innerText ="Title: " + detailsData.Title;
        const year = document.querySelector(".year").innerText ="Year: " + detailsData.Year;
        const rated = document.querySelector(".rated").innerText ="Rated: " + detailsData.Rated;
        const released = document.querySelector(".released").innerText ="Released: " + detailsData.Released;
        const runtime = document.querySelector(".runtime").innerText ="Runtime: " + detailsData.Runtime;
        const actors = document.querySelector(".actors").innerText ="Actors: " + detailsData.Actors;
        const awards = document.querySelector(".awards").innerText ="Awards: " + detailsData.Awards;
        const boxOffice = document.querySelector(".boxOffice").innerText ="BoxOffice: " + detailsData.BoxOffice;
        const country = document.querySelector(".country").innerText ="Country: " + detailsData.Country;
        const dvd = document.querySelector(".dvd").innerText ="DVD: " + detailsData.DVD;
        const director = document.querySelector(".director").innerText ="Director: " + detailsData.Director;
        const genre = document.querySelector(".genre").innerText ="Genre: " + detailsData.Genre;
        const language = document.querySelector(".language").innerText ="language: " + detailsData.Language;
        const metaScore = document.querySelector(".metaScore").innerText ="MetaScore: " + detailsData.Metascore;
        const plot = document.querySelector(".plot").innerText ="Plot: " + detailsData.Plot;
        const production = document.querySelector(".production").innerText ="Production: " + detailsData.Production;
        const type = document.querySelector(".type").innerText ="Type: " + detailsData.Type;
        const website = document.querySelector(".website").innerText ="Website: " + detailsData.Website;
        const writer = document.querySelector(".writer").innerText ="Writer: " + detailsData.Writer;
        const imdbId = document.querySelector(".imdbId").innerText ="Imdb Id: " + detailsData.imdbID;
        const imdbRating = document.querySelector(".rating").innerText ="Imdb Rating: " + detailsData.imdbRating;
        const imdbVotes = document.querySelector(".votes").innerText ="Imdb Votes: " + detailsData.imdbVotes;
}
  imdbRating1();

  const theme = document.getElementById("select");
  theme.addEventListener("change", () =>{
        if(theme.value==="Dark"){
                // const theme = document.getElementById("select");
                const h1 = document.getElementById("h1");
                h1.style.backgroundColor = "black";
                h1.style.color = "white";
                theme.style.backgroundColor = "black";
                theme.style.color = "white"
                const section1 = document.querySelector(".section1");
                section1.style.backgroundColor = "black";
                document.querySelector(".mainDiv").style.backgroundColor = "black";
                document.querySelector(".a").style.color = "white";
                document.querySelector(".b").style.color = "white";
                document.querySelector(".c").style.color = "white";
                document.querySelector(".d").style.color = "white";
                document.querySelector(".h2").style.color = "white";
                document.querySelector(".h2").style.backgroundColor = "black";
                document.querySelector(".section2").style.backgroundColor = "black";
                document.querySelector(".secondD").style.color = "white";
                document.querySelector(".secondD").style.backgroundColor = "black";
        }else{
                const theme = document.getElementById("select");
                const h1 = document.getElementById("h1");
                h1.style.backgroundColor = "rgb(4, 140, 140)";
                h1.style.color = "black";
                theme.style.backgroundColor = "rgb(25, 255, 48)";
                theme.style.color = "white"
                const section1 = document.querySelector(".section1");
                section1.style.backgroundColor = "rgb(54, 78, 239)";
                document.querySelector(".mainDiv").style.backgroundColor = "rgb(4, 170, 170)";
                document.querySelector(".a").style.color = "black";
                document.querySelector(".b").style.color = "black";
                document.querySelector(".c").style.color = "black";
                document.querySelector(".d").style.color = "black";
                document.querySelector(".h2").style.color = "black";
                document.querySelector(".h2").style.backgroundColor = "rgb(131, 131, 239)";
                document.querySelector(".section2").style.backgroundColor = "rgb(131, 131, 239)";
                document.querySelector(".secondD").style.color = "black";
                document.querySelector(".secondD").style.backgroundColor = "rgb(142, 142, 239)";
        }
  })