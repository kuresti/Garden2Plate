//Module that provides utility functions

//Imports

export function renderNoImageListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = false
) {
  const htmlStrings = list.map(templateFn);

  //if clear is true the contents of the parent need to be cleared out
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

export async function renderImagesListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = false
) {
  try {
    //Create promises for loading images
    const promises = list.map(
      (item) =>
        new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(templateFn(item));
          img.src = item.default_image.original_url;
        })
    );

    //Wait for all imgs to load
    await Promise.all(promises);
    //Generate HTML strings
    const htmlStrings = list.map(templateFn);

    //const htmlStrings2 = list.map(templateFn);
    console.log(htmlStrings);
    //Clear parent element if needed
    if (clear) {
      parentElement.innerHTML = "";
    }

    //Insert HTML strings into parent element
    parentElement.insertAdjacentHTML(position, htmlStrings.join("")); // htmlStrings2.join(""));
  } catch (error) {
    console.error(error);
  }
  return "An error occurred while loading template.";
}

//set a listener for both touchend and click
export function setEventListener(selector, inputField, callback) {
  document.querySelector(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback(inputField);
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

export function renderWithTemplate(template, parent, data, callback) {
  parent.insertAdjacentHTML("afterbegin", template);
  if (callback) {
    callback(data);
  }
}

//gets template from partials
export async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

export async function loadHeaderFooter() {
  const headerTemplate = await loadTemplate("partials/header.html");
  const headerElement = document.querySelector("#main-header");
  const footerTemplate = await loadTemplate("partials/footer.html");
  const footerElement = document.querySelector("#main-footer");

  renderWithTemplate(headerTemplate, headerElement);
  renderWithTemplate(footerTemplate, footerElement);
}
