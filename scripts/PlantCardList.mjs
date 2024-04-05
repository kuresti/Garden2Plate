//Module to create output buttons and connected popup cards

//Imports
import { renderListWithTemplate } from "./utils.mjs";

//output button template function
function outputButtonTemplate(plant) {
    
    
    return `<li class="card" id="card-list"><button class="card-button">${plant.common_name}</button>
            <section class="card">
                <span class="card" id="card-close></span>
                <h2 class="card" id="card-header">${plant.common_name}</h2>
                
                <h3 class="card-summary">Plant Info</h3>
                <p class="card-summary">Description: ${plant.description}</p>
                <p class="card-summary">Dimension: ${plant.dimension}</p>
                <p class="card-summary">Propogation: ${plant.propogation}</p>
                <p class="card-summary">Water Needs: ${plant.watering}</p> <p class="card-summary">Sunlight needs: ${plant.sunlight}</p>
                <p class="card-summary">Pruning Month: ${plant.pruning_month}</p>
                <p class="card-summary">Growth Rate: ${plant.growth_rate}</p>
                <p class="card-summary">Harvest Season: ${plant.harvest_season}</p>
                <p class="card-summary">Flower Coler: ${plant.flower_color}</p>
                </li>`
                
}


export default class OutputButtons {
    constructor(dataSource, listElement) {
            this.dataSource = dataSource;
            this.listElement = listElement;
            this.plant = {};
    }

    async init() {
        this.plant = await this.dataSource;
        this.renderList(list);
    }

    renderList(plant) {
        renderListWithTemplate(outputButtonTemplate, this.listElement, plant);
        console.log(plant);
        }

    }




