import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
 
  let cities = await fetchCities();
  // console.log(cities)
  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try{
    const response = await fetch("http://43.204.129.226:8082/cities");
    // console.log(response, typeof(response)); 
    const citiesData = await response.json();
    // console.log(data, typeof(data)) //data is an array of objects
    return citiesData //returns an array of objects with city data
  }catch(err){
    console.log(err)
    return null
  }
  
}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) 
{
 
  const divele = document.createElement("div");
  divele.setAttribute('class','col-12 col-sm-6 col-lg-3 mb-4');
  divele.innerHTML = 
  ` <a href='pages/adventures/?city=${id}' id='${id}'>
  <div class='tile'>
    <div class='tile-text text-center'>
      <h5>${city}</h5>
      <p>${description}</p>
    </div>
    <img class='img-fluid' src='${image}'>
  </div>
</a>`

document.getElementById('data').appendChild(divele);
}
export { init, fetchCities, addCityToDOM };
