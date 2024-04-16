//Module to create plant buttons

//Imports
import {
  renderNoImageListWithTemplate,
  renderImagesListWithTemplate,
  setLocalStorage,
  getLocalStorage,
} from "./utils.mjs";

// const dataSource = {};

// const cardElement = document.querySelector(".plant-card-container");

// button template function
function createPlantButtonsTemplate(plant) {
  return `<li class="plant-button-list">
              <button class="plant-button" data-info="${plant.common_name}">${plant.common_name}</button>`;
}

//Plant card template
export function createPlantCard(plant) {
  return `<div class="card"> 
             <h2 class="card-title">${plant.common_name}</h2>            
               <img class="card-images" src="${plant.default_image.original_url}"
                        srcset="${plant.default_image.small_url} ${plant.default_image.medium_url} ${plant.default_image.regular_url}"
                         alt="${plant.common_name}">
                         <span class="card-front-bottom"></span>
                         <div class="card-slide">                         
                         
                         <h2 class="card-desc">Plant Info</h2>
                         <input type="checkbox" id="favorites">
                         <label class="fav-label" for="favorites">Favorite
                         <div id="tick-mark"></div>
                         </label>
                         <p class="card-desc"><strong>Dimension:</strong> ${plant.dimension}</p>
                         <p class="card-desc"><strong>Propogation:</strong> ${plant.propogation}</p>
                         <p class="card-desc"><strong>Water Needs:</strong> ${plant.watering}</p> 
                         <p class="card-desc"><strong>Sunlight needs:</strong> ${plant.sunlight}</p>
                         <p class="card-desc"><strong>Pruning Month:</strong> ${plant.pruning_month}</p>
                         <p class="card-desc"><strong>Growth Rate:</strong> ${plant.growth_rate}</p>
                         <p class="card-desc"><strong>Harvest Season:</strong> ${plant.harvest_season}</p>
                         <p class="card-desc"><strong>Flower Color:</strong> ${plant.flower_color}</p>
                         </div>
                         </div>`;
}

export default class PlantButtonList {
  constructor(dataSource, element) {
    this.dataSource = dataSource;
    this.element = element;
    this.plant = {};
    this.buttonTemplate = createPlantButtonsTemplate(this.plant);
    this.info = document.querySelector("data-info");
  }

  async init() {
    this.plant = await this.dataSource;
    console.log(this.plant);

    //this.renderPlantButtonList(this.plant);
  }

  async plantButtonSetEventListener(plant) {
    const buttons = document.querySelectorAll(".plant-button");
    buttons.forEach((button) => {
      button.addEventListener("click", async () => {
        //Get common_name from button dataset data-info
        const commonName = button.dataset.info;

        const plantData = [
          plant.find((item) => item.common_name === commonName),
        ];

        if (plantData) {
          await this.renderPlantCard(plantData);
        }
      });
    });
  }

  renderPlantButtonList(plant) {
    renderNoImageListWithTemplate(
      createPlantButtonsTemplate,
      this.element,
      plant,
      "afterbegin",
      true
    );
    console.log(plant);
  }

  async renderPlantCard(plant) {
    await renderImagesListWithTemplate(
      createPlantCard,
      this.element,
      plant,
      "afterbegin",
      true
    );
    this.favEventListener(plant);
  }

  async buttonFunctionality(plant) {
    await this.plantButtonSetEventListener(plant);
  }

  favEventListener(plant) {
    document.querySelector("#favorites").addEventListener("change", () => {
      const favPlant = plant[0];

      this.addToFav(favPlant);
    });
  }

  addToFav(favPlant) {
    const favPlants = getLocalStorage("so-fav") || [];
    //If plant is not in the fav list, add it to the list
    favPlants.push(favPlant);
    console.log(favPlant);
    setLocalStorage("so-fav", favPlants);
    alertMessage(`${favPlant.common_name} has been added you your list.`);
  }
}
