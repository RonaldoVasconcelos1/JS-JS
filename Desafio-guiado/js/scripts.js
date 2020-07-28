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
    tabCountries = document.querySelector('#tab-Favorites');
    countCountries = document.querySelector('#count-Countries');
    countFavorites = document.querySelector('#count-Favorites');

    totalPopulationList = document.querySelector('#total-Population-List');
    totalPopulationFavorites = document.querySelector('#total-Population-Favorites');

    numberFormat = Intl.NumberFormat('pt-BR');

    fetchCountries();

});

function fetchCountries() {
    console.log('HELOOOOOOOOOOOOO');
}