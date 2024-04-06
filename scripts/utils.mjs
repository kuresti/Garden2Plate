//Module that provides utility functions 

//Imports






export function renderListWithTemplate(templateFn, parentElement, list, list2, position = "afterbegin", clear = false) {
    const htmlStrings = list.map(templateFn);
    const htmlStrings2 = list2.map(templateFn);

    //if clear is true the contents of the parent need to be cleared out
    if (clear) {
        parentElement.innerHTML = "";
    }
    parentElement.insertAdjacentHTML(position, htmlStrings.join(""), htmlStrings2.join(""));
}

//set a listener for both touchend and click
export function setEventListener(selector, inputField, callback) {
    document.querySelector(selector).addEventListener("touchend", (event) => {
        event.preventDefault();
        callback(inputField)
    });
    document.querySelector(selector).addEventListener("click", () => {
        callback(inputField);
    });
}

//Get data from localstorage
export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

//Save data to localstorage
export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}


