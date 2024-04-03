//This module handles interactions with APIs

//Waits for the response from the API then converts it to JSON
async function convertToJson(response) {
    const data = await response.json()
    if (response.ok) {
      return data;
    } else {
      throw { name: "servicesError", message: data};

    }
  }

async function convertTextToJson(response) {
    const data = await response.text();
    if (response.ok) {
        return JSON.parse(data);
    } else {
        throw { name: "servicesError", message: data};
    }
}



  export default class APIInteractions {
        constructor(userInputPlants, userInputRecipes) {
            this.userInputPlants = userInputPlants;
            this.userInputRecipes = userInputRecipes;

            //URLs for API fetches defined
            this.plantBaseUrl = "https://perenual.com/api/species-list?key=sk-VvDh65ff36478eff84705";
            //this.detailsUrl = `https://perenual.com/api/species/details/${plantId}?key=sk-VvDh65ff36478eff84705`            
        }

        //fetch plantList
        async fetchPlantData() {
            this.userInputPlants = document.getElementById("pName").value.toLowerCase();
            const url = `${this.plantBaseUrl}&edible=1&q=${this.userInputPlants}`;
            console.log(this.userInputPlants);
            const plantResponse = await fetch(url);
            const data = await convertTextToJson(plantResponse);
            const plantArray = Object.entries(data);
            // if (Array.isArray(plantArray)) {
            //     console.log("plantArray is an array: ", plantArray);
            // } else {
            //     console.log("plantArray is not an array: ", typeof plantArray);
            // }
            //console.log(data);
            return plantArray;
        }

        async processPlantData() {
           try{ 
            const returnedArrays = await this.fetchPlantData();

            //Flatten the nested arrays to process further
            const flatData = returnedArrays.flatMap(arr => arr[1]);

            //Take flatData and create an array of extracted obj.common_name properties
            const objWithCommon_Name = flatData.filter(obj => obj.hasOwnProperty("common_name"));
            //console.log(objWithCommon_Name);
            
            //Create empty array to hold uniquePlantNameObj
            const uniqueCommon_Name = [];

            //Iterate through the plantItems list to create a uniqueItems list
            objWithCommon_Name.forEach((plant) => {
               //check to see if common_name is unique
               const existingItem = uniqueCommon_Name.find( (item) => {
                   return item.common_name === plant.common_name
               });
               if (!existingItem) {
                   uniqueCommon_Name.push(plant);
               }
               
            });
            console.log(uniqueCommon_Name);
            return uniqueCommon_Name;
            } catch (error) {
            console.error("An error occurred while processing data: ", error);
        }
                

            //     // const detailsResponse = await fetch(this.detailsUrl);
            //     // const detailsResult = await convertTextToJson(detailsResponse);
            //     // console.log(detailsResult);
            // } catch (error) {
            //     console.error(error);
            // }

        
        
        }
        // async fetchSpoonacular() {
    }    //     const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=basil%2C%20tomato%2C%20carrot&number=3&ignorePantry=true&ranking=1';
        //     const options = {
	    //         method: 'GET',
	    //         headers: {
		//                 'X-RapidAPI-Key': 'a280abf7efmsh09c8af167599834p1f9908jsn07c89b65bef1',
		//                 'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	    //         }
        //     };

        //     try {
	    //         const response = await fetch(url, options);
	    //         const result = await convertTextToJson(response);
	    //         console.log(result);
        //     } catch (error) {
	    //         console.error(error);
        //     }
        // }
  


