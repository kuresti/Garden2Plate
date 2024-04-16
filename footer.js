

function getCopyrightYear() {
    return document.querySelector(".copyright-year").textContent = new Date().getFullYear();
}

getCopyrightYear();



orderDate();

function lastModified() {
    return document.querySelector(
    ".last-modified"
    ).textContent = new Date(document.lastModified);
}

lastModified();