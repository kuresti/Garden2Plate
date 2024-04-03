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
        async fetchData() {
            this.userInputPlants = document.getElementById("pName").value.toLowerCase();
            const url = `${this.plantBaseUrl}&edible=1&q=${this.userInputPlants}`;
            console.log(this.userInputPlants);
            const plantResponse = await fetch(url);
            const data = await convertTextToJson(plantResponse);
            console.log(data);
        }

        async fetchPerenual() {
            
            this.fetchData();
            
            
            
          

            //     // const detailsResponse = await fetch(this.detailsUrl);
            //     // const detailsResult = await convertTextToJson(detailsResponse);
            //     // console.log(detailsResult);
            // } catch (error) {
            //     console.error(error);
            // }

        }
        

        async fetchSpoonacular() {
            const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=basil%2C%20tomato%2C%20carrot&number=3&ignorePantry=true&ranking=1';
            const options = {
	            method: 'GET',
	            headers: {
		                'X-RapidAPI-Key': 'a280abf7efmsh09c8af167599834p1f9908jsn07c89b65bef1',
		                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	            }
            };

            try {
	            const response = await fetch(url, options);
	            const result = await convertTextToJson(response);
	            console.log(result);
            } catch (error) {
	            console.error(error);
            }
        }
  }


