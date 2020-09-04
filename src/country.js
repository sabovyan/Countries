import 'babel-polyfill';
import { state } from './constants/constants';
import { debounce, navToggle } from './helper/function.helper';
import { setFavorite } from './helper/storage.helper';
import { renderMap, renderTable } from './helper/render.helper';

/* SECTION hamburger menu */
const navList = document.querySelector('.l-nav__list-container');
const navToggler = document.querySelector('.nav__toggler');

/* SECTION table */
const searchInput = document.querySelector('#search');

/* card */
const countriesCard = document.querySelector('.countries__card');
const cardCloseBtn = document.querySelector('.card__close');
const cardStarBtn = document.querySelector('.card__star');
const cardStarPolygon = document.querySelector('.card__star-polygon');

/* navigation */
const countriesNavMap = document.querySelector('.countries__item-map');
const countriesNavTable = document.querySelector('.countries__item-table');
const countriesContainer = [countriesNavMap, countriesNavTable];
const mapSection = document.querySelector('.countries__section-map');
const tableSection = document.querySelector('.countries__section-table');

/* storage */
const storage = window.localStorage;

function displayMap() {
  tableSection.style.display = 'none';
  mapSection.style.display = 'flex';
  countriesNavTable.classList.remove('countries__item--active');
  countriesNavMap.classList.add('countries__item--active');
}

function displayTable() {
  mapSection.style.display = 'none';
  tableSection.style.display = 'block';
  countriesNavMap.classList.remove('countries__item--active');
  countriesNavTable.classList.add('countries__item--active');
}

const render = async () => {
  if (state.countryNav.map === true) {
    renderMap();
    displayMap();
  }
  if (state.countryNav.table === true) {
    renderTable();
    displayTable();
  }
};

render();

countriesCard.addEventListener('click', (e) => {
  if (e.target === countriesCard) {
    cardStarBtn.classList.remove('card__start--added');
    countriesCard.style.display = 'none';
  }
  if (
    e.target === cardCloseBtn ||
    e.target === cardCloseBtn.querySelector('path')
  ) {
    cardStarBtn.classList.remove('card__start--added');
    countriesCard.style.display = 'none';
  }

  if (e.target === cardStarBtn || e.target === cardStarPolygon) {
    state.favCountries = setFavorite(
      cardStarBtn,
      'card__start--added',
      state.favCountries,
      state.country.alpha3Code
    );
  }
});

/* SECTION Countries main navigation */
navToggler.addEventListener('click', navToggle.bind(null, navToggler, navList));

/* SECTION Countries inner navigation */
countriesContainer.forEach((navItem) => {
  navItem.addEventListener('click', (e) => {
    if (e.target === countriesNavMap) {
      displayMap();
      state.countryNav.map = true;
      state.countryNav.table = false;
      storage.setItem('countryNav', JSON.stringify(state.countryNav));
      searchInput.value = '';
    }
    if (e.target === countriesNavTable) {
      displayTable();
      state.countryNav.table = true;
      state.countryNav.map = false;
      storage.setItem('countryNav', JSON.stringify(state.countryNav));
    }
    render();
  });
});

/* Main search */
const search = debounce(renderTable, 700);
searchInput.addEventListener('input', search);
