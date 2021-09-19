//You can edit ALL of the code here
const allEpisodes = getAllEpisodes();

function setup() {
  makePageForEpisodes(allEpisodes);
}

window.onload = setup;

function makePageForEpisodes(episodeList) {
    const rootElem = document.getElementById("root");
    // rootElem.id = "rootEl";
    // console.log(rootElem);
    rootElem.textContent = "";
    
    // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
   
    episodeList.forEach(e => {
    const divEl = document.createElement('div'); 
    divEl.id = "div";
    const titleEl = document.createElement('h2');
    titleEl.id = "title";
    const paraEl = document.createElement('p');
    paraEl.id = "summary";
    const imgEl = document.createElement('img');
    imgEl.id = "image";
    const aTag = document.createElement("a");
    // const linkEl = document.createTextNode("Original data from TVMaze.com"); //creates text

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
// numberDisplayEl.innerText = `${allEpisodes.length} Episodes`;
// numberDisplayEl.style.color = 'grey';


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
