import "babel-polyfill";
import { navToggle } from "./helper/function.helper";
import { renderFavorites } from "./helper/render.helper";

const navToggler = document.querySelector(".nav__toggler");
const navList = document.querySelector(".l-nav__list-container");

navToggler.addEventListener("click", navToggle.bind(null, navToggler, navList));

renderFavorites();
