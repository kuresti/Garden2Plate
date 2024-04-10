//module to handle setting fav plants to localStorage
//and returning a list from localStorage

//imports
import {
  getLocalStorage,
  setLocalStorage,
  loadHeaderFooter,
} from "./utils.mjs";

function favAddEventListener() {
  document.addEventListener("#favorites");
}
