//Module that executes modules and functions to get plant data

//Import calls
import DataProcesses from "./DataProcesses.mjs";
import APIInteractions from "./APIInteractions.mjs";
import { getLocalStorage, setEventListener } from "./utils.mjs";
import PlantButtonList from "./PlantButtonList.mjs";

//constructors
//Create instance of APIInteractions
const apiInteractions = new APIInteractions();
//1st instance of DataProcesses
const dataProcesses = new DataProcesses();
//const dataSource
const dataSource = {};
//Get cardElement to render cards
const cardElement = document.querySelector(".plant-card-container");
//Get buttonElement to render buttons
const buttonElement = document.querySelector("#plant-buttons");
//Create an instance of PlantButtonList and send parameters needed
const plantButtonList = new PlantButtonList(dataSource, buttonElement);
//Create 2nd instance of PlantButtonList
const plantCardList = new PlantButtonList(dataSource, cardElement);

//Event listener on the DOM to ensure the page is loaded before getUserInput is called
document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("search-button");

  //Event listener added to searchButton to trigger fetchPerenual()
  searchButton.addEventListener("click", async () => {
    console.log("Button pushes");
    try {
      //Fetch data from Perunuel
      const plantData = await apiInteractions.fetchPlantData();
      console.log(plantData);
      //Define userInput
      const userInput = document.getElementById("pName").value.toLowerCase();

      //Find obj that matches userInput
      const plantMatch = plantData.data.find(
        (data) => data.common_name === userInput
      );

      //Check to see if plantData contains a match to userInput
      if (!plantMatch) {
        //If there is not a match
        document.querySelector(".notFoundMessage").innerText =
          "Plant not found. Please try again.";
      } else {
        //Create details array
        const dataSource = await dataProcesses.createDetailsArray();

        //Create list of plan buttons
        await plantButtonList.init();
        plantButtonList.renderPlantButtonList(dataSource, buttonElement);

        //Set event Listeners on the rendered buttons
        plantCardList.buttonFunctionality(dataSource, cardElement);
      }
    } catch (error) {
      console.error("An error occurred: ", error);
      document.querySelector(".notFoundMessage").innerText =
        "Plant not found. Please try again.";
    }
  });
});

//Event listener added to Clear Input button
const inputField = document.getElementById("pName");
setEventListener("#clear-button", inputField, (inputField) => {
  //clear any not found messages
  document.querySelector("#clearNotFound").innerText = "";
  //clear search
  inputField.value = "";

  document.querySelector(".card").innerHTML = "";
  document.querySelector("#plant-buttons").innerHTML = "";
});

function addFavoritesEventListener() {
  document.getElementById("favorite-plants").addEventListener("click", () => {
    console.log("click");
    const list = getLocalStorage("so-fav");
    console.log("list");
    console.log(list);
    plantButtonList.renderPlantButtonList(list, buttonElement);
    plantCardList.buttonFunctionality(list, cardElement);
  });
}
addFavoritesEventListener();
