import { loadHeaderFooter } from "./utils.mjs";

await loadHeaderFooter();

function getCopyrightYear() {
    return document.querySelector(".copyright-year").textContent = new Date().getFullYear();
}

getCopyrightYear();

