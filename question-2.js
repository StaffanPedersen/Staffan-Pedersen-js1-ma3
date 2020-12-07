const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultContainer = document.querySelector(".results");

async function getdata() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        const logdata = results.results;

        resultContainer.innerHTML = ""

        for(let i = 0; i <8; i++) {
            resultContainer.innerHTML += `<div class="results">Name: ${logdata[i].name} <br> Rating: ${logdata[i].rating} <br> Tags: ${logdata[i].tags.length} </div>`;
            
        }
    }catch (error) {
        console.log(error);
        resultContainer.innerHTML = error
        }
}

getdata();