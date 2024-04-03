//Module that executes modules and functions to get plant data
import APIInteractions from "./APIInteractions.mjs";


//Event listener on the DOM to ensure the page is loaded before getUserInput is called
document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");

    //Event listener added to searchButton to trigger fetchPerenual()
    searchButton.addEventListener("click", () => {
        try {
            plantAPIInteractions.processPlantData();
            
      
         } catch (error) {
            console.error("An error occurred: ", error);
         }
        });
    });
        

const plantAPIInteractions = new APIInteractions();