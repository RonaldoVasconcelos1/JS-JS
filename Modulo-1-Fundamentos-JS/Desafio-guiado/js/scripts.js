/**
 *  State of Application
 */

let tabCountries = null;
let tabFavorites= null;

let allCountries = [];
let favoritesCountries = [];

let countCountries = 0;
let countFavorites = 0;

let totalPopulationList = 0;
let totalPopulationFavorites = 0;

let numberFormat = 0;

window.addEventListener('load', () => {

    tabCountries = document.querySelector('#tab-Countries');
    tabFavorites = document.querySelector('#tab-Favorites');
    countCountries = document.querySelector('#count-Countries');
    countFavorites = document.querySelector('#count-Favorites');

    totalPopulationList = document.querySelector('#totalPopulationList');
    totalPopulationFavorites = document.querySelector('#total-Population-Favorites');

    numberFormat = Intl.NumberFormat('pt-BR');

    fetchCountries();

});

async function fetchCountries() {
    const res = await  fetch('http://restcountries.eu/rest/v2/all');
    const json = await res.json();
    allCountries = json.map(country => {
        const {numericCode, translations, population, flag} = country;
        return {
            id : numericCode,
            name : translations.pt,
            population,
            formatedPopulation : formatNumber(population),
            flag 
        };
    });
    render();
}

function render(){
    renderCountryList();
    renderFavorites();
    renderSumary();
    handleCountryButtons();
}

function renderCountryList() {
    let countriesHTML = "<div>"

    allCountries.forEach(country => {
        const { name, flag, id, population, formatedPopulation} = country;

        const countryHTML = `
        <div class='country' >
            <div>
                <a id="${id}" class="waves-effect waves-light btn">+</a>
            </div>
                <img src="${flag}" alt="${name}">
            <div>
                <ul>
                <li>${name}</li>
                <li>${formatedPopulation}</li>
                </ul>
            </div>
        </div>`;

        countriesHTML += countryHTML
    });
    countriesHTML += '</div>'

    tabCountries.innerHTML = countriesHTML;
}
function renderFavorites() {
    let favoritesHTML = "<div>"

    favoritesCountries.forEach( country => {
        
        const { name, flag, id, population, formatedPopulation} = country;
        const favoriteCountryHTML = `
        <div class='country' >
            <div>
                <a id="${id}" class="waves-effect waves-light btn red darken-2">-</a>
            </div>
                <img src="${flag}" alt="${name}">
            <div>
                <ul>
                <li>${name}</li>
                <li>${formatedPopulation}</li>
                </ul>
            </div>
        </div>`;
        favoritesHTML += favoriteCountryHTML;
    });

    favoritesHTML += "</div>"
    tabFavorites.innerHTML = favoritesHTML;
}
function renderSumary() {
    countCountries.textContent = allCountries.length;
    countFavorites.textContent = favoritesCountries.length;

    const totalPopulation = allCountries.reduce((accumulator, current) => {
        return accumulator + current.population;
    },0);

    const totalFavorites = favoritesCountries.reduce((accumulator, current) => {
        return accumulator + current.population;
    },0);

    totalPopulationList.textContent =formatNumber(totalPopulation);
    totalPopulationFavorites.textContent = formatNumber(totalFavorites);
  
}
function handleCountryButtons() {
    const countryButtons = Array.from(tabCountries.querySelectorAll('.btn'));
    const favoritesButtons = Array.from(tabFavorites.querySelectorAll('.btn'));

    countryButtons.forEach(button => {
        button.addEventListener('click', () => addToFavorites(button.id));
    });

    favoritesButtons.forEach(button => {
        button.addEventListener('click', () => removeToFavorites(button.id));
    });

}

function addToFavorites(id) {
    const countryToAdd = allCountries.find( country => country.id === id);
    favoritesCountries = [...favoritesCountries, countryToAdd];

   favoritesCountries.sort((a,b) => {
       return a.name.localeCompare(b.name);
   });
   allCountries = allCountries.filter(country => country.id !== id);
   render();
}

function removeToFavorites(id) {

    const countryToRemove = favoritesCountries.find( country => country.id ===id);
    allCountries = [... allCountries, countryToRemove];

    favoritesCountries.sort((a,b) => {
        return a.name.localeCompare(b.name);
    });

    favoritesCountries = favoritesCountries.filter(country => country.id !== id);
    render();
}


function formatNumber(number) {
    return numberFormat.format(number);
}