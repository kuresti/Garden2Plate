//This module handles interactions with APIs



//Import Calls

//Waits for the response from the API then converts it to JSON Obj
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


//APIInteractions handles fetches to APIs
  export default class APIInteractions {
        constructor(userInputPlants, userInputRecipes) {
            this.userInputPlants = userInputPlants;
            this.userInputRecipes = userInputRecipes;

            //URLs for API fetches defined
            this.plantBaseUrl = "https://perenual.com/api/species-list?key=sk-VvDh65ff36478eff84705&edible=1&q=";
            this.detailsBaseUrl = `https://perenual.com/api/species/details/`;  
            this.plantKey = `?key=sk-VvDh65ff36478eff84705`;          
        }

        //fetch plantList
        async fetchPlantData() {
            try {
                //Get userInput to search API                
                this.userInputPlants = document.getElementById("pName").value.toLowerCase();
                //Constructing URL
                const url = `${this.plantBaseUrl}${this.userInputPlants}`;
                //Test log
                //console.log(this.userInputPlants);
                //response from fetch
                const plantResponse = await fetch(url);
                //Returned data converted from Text to Json
                const data = await convertTextToJson(plantResponse);
                // //Json data converted to javascript object
                // const plantArray = Object.entries(data);

                //Flatten the nested arrays to process further
                //const flatData = data.flatMap(arr => arr[1]);


            //Test Function 
            // if (Array.isArray(plantArray)) {
            //     console.log("plantArray is an array: ", plantArray);
            // } else {
            //     console.log("plantArray is not an array: ", typeof plantArray);
            // }
            //console.log(data);
            return data;
            
        } catch (error) {
            console.error(error);

            return "An error ocurred while fetching plant data. Please try again later."
            }
        }
        
        

        //fetch plantDetails
        async fetchPlantDetails(id) {
            //Construct URL
            const url = `${this.detailsBaseUrl}${id}${this.plantKey}`
            //Fetch and await response
            const detailResponse = await fetch(url);
            //Convert response to Json
            const dataDetails = await convertTextToJson(detailResponse);
            // //Convert Json array into a javascript obj
            // const detailArray = Object.entries(data);
            //Flatten nested arrays
            //const flatDetailArray = detailArray.flatMap(arr => arr[1]);
            return dataDetails;
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

        


