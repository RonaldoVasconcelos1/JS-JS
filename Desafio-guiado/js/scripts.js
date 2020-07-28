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
        const { name, flag, id, population} = country;

        const countryHTML = `
        <div class='country' >
            <div>
                <a id="${id}" class="waves-effect waves-light btn">+</a>
            </div>
                <img src="${flag}" alt="${name}">
            <div>
                <ul>
                <li>${name}</li>
                <li>${population}</li>
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
        
        const { name, flag, id, population} = country;
        const favoriteCountryHTML = `
        <div class='country' >
            <div>
                <a id="${id}" class="waves-effect waves-light btn red darken-2">-</a>
            </div>
                <img src="${flag}" alt="${name}">
            <div>
                <ul>
                <li>${name}</li>
                <li>${population}</li>
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

    const totalFavorites = favoritesCountriesf.reduce((accumulator, current) => {
        return accumulator + current.population;
    },0);

    totalPopulationList.textContent = totalPopulation;
    totalPopulationFavorites.textContent = totalFavorites;
  
}
function handleCountryButtons() {}