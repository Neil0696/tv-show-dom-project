
//creating a global variable
const allEpisodes = getAllEpisodes();

function setup() {
  makePageForEpisodes(allEpisodes);
}

window.onload = setup;

function makePageForEpisodes(episodeList) {
    const rootElem = document.getElementById("root");
    rootElem.textContent = "";
 
    episodeList.forEach(e => {
    const divEl = document.createElement('div'); 
    divEl.className = "divEl";
    const titleEl = document.createElement('h2');
    titleEl.id = "titleEl";
    const paraEl = document.createElement('p');
    paraEl.id = "summaryEl";
    const imgEl = document.createElement('img');
    imgEl.id = "imageEl";
    const aTag = document.createElement("a");
    aTag.id = "aTag";
    // const linkEl = document.createTextNode("Original data from TVMaze.com"); //adds text inside the element
  
    rootElem.appendChild(divEl);
    divEl.appendChild(titleEl);
    divEl.appendChild(imgEl);
    divEl.appendChild(paraEl);
    divEl.appendChild(aTag);
    // aTag.appendChild(linkEl);

    titleEl.innerHTML = `${e.name} - S${(e.season.toString().padStart(2, '0'))}E${(e.number.toString().padStart(2, '0'))}`;
    imgEl.src = e.image.original;
    paraEl.innerHTML = e.summary;
    // aTag.title = 'this is a link';
    // aTag.href = e._links.self.href; //shows the api link data object from episode.js file 
    aTag.innerHTML = `<a href= ${e.url} target="_blank">Episode information</a>`;
  });
}

//Level 200 (search bar)

const searchBtnEl = document.getElementById('search-btn');
const numberDisplayEl = document.getElementById('number-display');


searchBtnEl.addEventListener('input', (e) => {
  
  let search = e.target.value.toLowerCase();
  
  let filteredEps = allEpisodes.filter((episode) => {
    return (
      episode.name.toLowerCase().includes(search) ||
      episode.summary.toLowerCase().includes(search)
      );
    });

    numberDisplayEl.innerText = `Displaying ${filteredEps.length}/${allEpisodes.length} Episodes`;

    makePageForEpisodes(filteredEps);

  });

  //Level 300 (Select input)

let selectEl = document.getElementById("all-episodes");

selectEl.addEventListener('change', selectAnEpisode);

  function selectAnEpisode(e){
  // let optionEl = document.querySelector('option');
  let selectEpisode = allEpisodes.filter((episode) => {
    return e.target.value.includes(episode.name);
  }); 
  
  makePageForEpisodes(selectEpisode)

  // if (selectEl.value === "all episodes") {
  //   makePageForEpisodes(allEpisodes);
  // } else {
  //   makePageForEpisodes(selectEpisode);
  // }
  //clears displayNumber text when user selects any option
  numberDisplayEl.innerText = "";
}
