const URL_trees_in_paris =
  "https://opendata.paris.fr/api/records/1.0/search/?dataset=arbresremarquablesparis&q=&rows=1000&facet=genre&facet=espece&facet=stadedeveloppement&facet=varieteoucultivar&facet=dateplantation&facet=libellefrancais";
const URL_chuck_jocke = "https://api.chucknorris.io/jokes/random";

//

const treeUL = document.getElementById("trees");

// API ... again ?
// JSON ?
// JSON lint
// axios ... what ?

console.log(typeof axios);
console.log(axios);

function display(list) {
  treeUL.innerHTML = "";
  list.forEach(({ fields }) => {
    treeUL.innerHTML += `<li>${fields.libellefrancais} - ${fields.adresse}</li>`;
  });
}

axios
  .get(URL_trees_in_paris)
  .then((res) => {
    display(res.data.records);
  })
  .catch((err) => {
    console.error(err);
  });

console.log("continue there ...");
