

// 

async function convertToJson(response) {
    const data = await response.text();
    if(response.ok) {
        return JSON.parse(data);
    } else {
        throw {name: "servicesError", message: data};
    }
}



//Test function to verify data received from fetchPlantData function
// async function fetchAndLogPlantData() {
//     try {
//         const plantData = await fetchPlantData();
//         console.log(plantData)
//     } catch (error) {
//         console.error("Error fetching plant dtat: ", error);
//     }
// }

// fetchAndLogPlantData(); //Test was successful


export default class PlantAPIInteractions {
    constructor() {
        
    }

    async fetchPlantData() {
        const url = 'https://garden-api.p.rapidapi.com/plants';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a280abf7efmsh09c8af167599834p1f9908jsn07c89b65bef1',
            'X-RapidAPI-Host': 'garden-api.p.rapidapi.com'
        }
    };
    
        try {
            const response = await fetch(url, options);
            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const plantData = await convertToJson(response);
            return plantData;
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    async postPlantData() {
        const url = 'https://garden-api.p.rapidapi.com/plants';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'a280abf7efmsh09c8af167599834p1f9908jsn07c89b65bef1',
		'X-RapidAPI-Host': 'garden-api.p.rapidapi.com'
	},
	body: new URLSearchParams({
		botanicalName: 'Solanum lycopersicum',
		plantName: 'Roma Tomato',
		description: 'When fully ripe, they are a bright red color. Their shape is pear-shaped. They are used mainly for canning and have few seeds.',
		flowerColor: 'Yellow',
		foodNutrients: 'vitamin C, potassium, vitamin A’',
		nativeRegion: 'South America',
		growthHabits: 'Annual, frost tender, like warm weather',
		waterRequirements: 'Low water, do better being more dry, this encourages strong roots.',
		companionPlants: '[“Basil”, “Parsley”, “Marigolds”, “Carrots”, “Chives”, “Borage”, “Garlic”, “Lettuce”]',
		bloomingTimes: 'Summer',
		plantHeight: '39 inches',
		imageUrl: 'http/'
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
    }

    //filter data returned from fetchPlantData for a match of plantData.plantName   
    
    searchAddEventListener(){
     document.getElementById("searchButton").addEventListener("click", () => {
            this.searchPlantData();
        })
    }
    async searchPlantData() {
        const plantData = await this.fetchPlantData();
        const userInput = document.getElementById("pName").value;

        

        const plantMatch = plantData.filter( plant => plant.plantName === userInput);

        console.log(plantMatch);
    }

}

postPlantData();