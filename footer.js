

function getCopyrightYear() {
    const copyrightYear = document.querySelector(".copyright-year");

    if (copyrightYear) {
         copyrightYear.textContent = new Date().getFullYear();
    }   
}

getCopyrightYear();



// orderDate();

function lastModified() {
    return document.querySelector(
    ".last-modified"
    ).textContent = new Date(document.lastModified);
}

lastModified();