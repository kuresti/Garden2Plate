import APIInteractions from "./APIInteractions.mjs";

const myAPIInteractions = new APIInteractions();

//Event listener on the DOM to ensure the page is loaded before getUserInput is called
document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");

    //Event listener added to searchButton to trigger fetchPerenual()
    searchButton.addEventListener("click", async ()  => {
         
         const plantItems = await myAPIInteractions.fetchPlantData();
        
        //Iterate through the plantItems list to create a uniqueItems list
        plantItems.forEach((plant) => {
            //check to see if common_name is unique
            const existingItem = uniqueItems.find( (item) => {
                item.common_name === plant.common_name
            });
            if (!existingItem) {
                uniqueItems.push(plant);
            }
        });
        console.log(uniqueItems);
     });
});

//OutPutButtons class
// export default class outputButtons() {
//     constructor() {

//     }


// }

