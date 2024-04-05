//Module that executes modules and functions to get plant data

//Import calls
import DataProcesses from "./DataProcesses.mjs";
import OutputButtons from "./PlantCardList.mjs";
import APIInteractions from "./APIInteractions.mjs";
import { setEventListener } from "./utils.mjs";

//constructors
//Create instance of APIInteractions
const apiInteractions = new APIInteractions();
//1st instance of DataProcesses
const dataProcesses = new DataProcesses();
// //returns the list of plantNames
// const  = dataProcesses.createDetailsArray();
//returns the list of plantNames
const dataSource = {};
//Get the element to render the list in
const element = document.querySelector("#plantItems");
//Create an instance of OutputButtons class and send it the parameters it needs
const outputButtons = new OutputButtons(dataSource, element);






//Event listener on the DOM to ensure the page is loaded before getUserInput is called
document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");

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
                const plantMatch = plantData.data.find(data => data.common_name === userInput)

                //Check to see if plantData contains a match to userInput
                if (!plantMatch) {
                    //If there is not a match
                    document.querySelector(".notFoundMessage").innerText = "Plant not found. Please try again."
                

                } else {
                    //If userInput matches fetched data
                //Get plantNames for button text
               // const plantNames = await dataProcesses.getPlantNames();

                

                //Create details array
                const dataSource = await dataProcesses.createDetailsArray();
                //outputButtons.init();

                // Create the output buttons with the plantNames
                //ToDo handle cases when a plant is not found
                outputButtons.renderList(dataSource);   
                }

                
                
      
         } catch (error) {
            console.error("An error occurred: ", error);
            document.querySelector(".notFoundMessage").innerText = "Plant not found. Please try again.";
         }
        });
    });

    //Event listener added to Clear Input button
    const inputField = document.getElementById("pName");
    setEventListener("#clearInput", inputField, (inputField) => {
        //clear search
        inputField.value = "";
    });
        

