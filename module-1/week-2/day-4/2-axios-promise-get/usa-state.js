const URL =
  "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json";

// Fetch USA states with axios and the provided URL
// code a DOM program displaying the list
// add a feature to filter the list against the value of a HTML text input

// your code here !
// axios.get() ...

const statesUL = document.getElementById("states");

function displayState(states) {
  states.forEach((state, index) => {
    console.log(index, state);
    statesUL.innerHTML += `<li>${state}</li>`;
  });
}

axios
  .get(URL)
  .then((res) => {
    console.log(res.data);
    console.log(Object.values(res.data));
    // console.log(Object.keys(res.data));
    // console.log(Object.entries(res.data));
    displayState(Object.values(res.data));
  })
  .catch((res) => {});
