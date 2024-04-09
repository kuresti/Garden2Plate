//Module to create plant buttons 

//Imports
import { renderNoImageListWithTemplate, renderImagesListWithTemplate } from "./utils.mjs";



// const dataSource = {};

// const cardElement = document.querySelector(".plant-card-container");




// button template function
function createPlantButtonsTemplate(plant) {
  return `<li class="plant-button-list">
              <button class="plant-button" data-info="${plant.common_name}">${plant.common_name}</button>`;
}

//Plant card template
function createPlantCard(plant) {

    return `<div class="card"> 
             <h2 class="card-title">${plant.common_name}</h2>            
               <img class="card-images" src="${plant.default_image.original_url}"
                        srcset="${plant.default_image.small_url} ${plant.default_image.medium_url} ${plant.default_image.regular_url}"
                         alt="${plant.common_name}">
                         <span class="card-front-bottom"></span>
                         <div class="card-slide">                         
                         
                         <h2 class="card-desc">Plant Info</h2>
                         <p class="card-desc"><strong>Dimension:</strong> ${plant.dimension}</p>
                         <p class="card-desc"><strong>Propogation:</strong> ${plant.propogation}</p>
                         <p class="card-desc"><strong>Water Needs:</strong> ${plant.watering}</p> 
                         <p class="card-desc"><strong>Sunlight needs:</strong> ${plant.sunlight}</p>
                         <p class="card-desc"><strong>Pruning Month:</strong> ${plant.pruning_month}</p>
                         <p class="card-desc"><strong>Growth Rate:</strong> ${plant.growth_rate}</p>
                         <p class="card-desc"><strong>Harvest Season:</strong> ${plant.harvest_season}</p>
                         <p class="card-desc"><strong>Flower Color:</strong> ${plant.flower_color}</p>
                         </div>
                         </div>`
                         
       
    // return `            
    //           <section class="card-section">
    //             <div class="card card-body">
    //               <div class="flip-card">
    //                 <div class="flip-card__container">
    //                   <div class="card-front">
    //                     <div class="card-front__tp">
    //                     <img class="card-images" src="${plant.default_image.original_url}"
    //                     srcset="${plant.default_image.small_url} ${plant.default_image.medium_url} ${plant.default_image.regular_url}"
    //                     alt="${plant.common_name}">
    //                                 </div>
    //                               <div class="card-front__bt">
    //                       <button class="card-front-button">
    //                         <h2 id="card-front__text-title">${plant.common_name}</h2>
    //                         </button>
    //                                 </div>
    //                               </div>
    //                               <div class="card-back">
    //                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="card-front__icon" id="Layer_1" x="0" y="0" zoomAndPan="magnify" viewBox="0 0 375 374.999991" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="9cb55cb09c"><path d="M 150.648438 93.8125 L 224.148438 93.8125 L 224.148438 212.3125 L 150.648438 212.3125 Z M 150.648438 93.8125 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#9cb55cb09c)"><path fill="#33cc33" d="M 187.398438 207.996094 C 191.457031 205.785156 208.976562 195.289062 217.015625 175.753906 C 213.875 175.847656 208.992188 178.0625 202.875 182.824219 C 196.816406 187.535156 189.746094 194.71875 182.167969 204.765625 C 184.515625 206.371094 186.386719 207.441406 187.398438 207.996094 Z M 195.328125 155.164062 L 189.320312 158.253906 L 189.320312 170.117188 C 193.898438 166.199219 198.765625 163.921875 203.347656 162.726562 C 212.480469 160.355469 220.628906 162.363281 223.085938 164 L 224.148438 164.703125 L 223.910156 165.960938 C 218.027344 197.152344 188.335938 211.851562 188.257812 211.882812 L 187.398438 212.3125 L 186.542969 211.882812 C 186.464844 211.851562 156.753906 197.152344 150.890625 165.960938 L 150.652344 164.703125 L 151.699219 164 C 154.171875 162.363281 162.320312 160.355469 171.453125 162.726562 C 176.035156 163.921875 180.898438 166.199219 185.480469 170.117188 L 185.480469 141.535156 C 181.742188 139.144531 178.601562 135.867188 176.382812 131.996094 C 174.050781 127.9375 172.71875 123.238281 172.71875 118.238281 C 172.71875 113.238281 174.050781 108.542969 176.382812 104.480469 C 178.792969 100.292969 182.265625 96.789062 186.433594 94.371094 L 187.398438 93.8125 L 188.351562 94.371094 C 192.519531 96.789062 196.007812 100.292969 198.417969 104.480469 C 200.75 108.542969 202.082031 113.238281 202.082031 118.238281 C 202.082031 123.238281 200.75 127.9375 198.417969 131.996094 C 196.183594 135.867188 193.058594 139.144531 189.320312 141.535156 L 189.320312 153.9375 L 193.457031 151.804688 C 193.613281 148.96875 194.40625 146.183594 195.785156 143.714844 C 197.324219 140.976562 199.558594 138.589844 202.445312 136.851562 C 205.332031 135.132812 208.484375 134.304688 211.625 134.257812 C 214.859375 134.226562 218.0625 135.039062 220.882812 136.613281 L 221.851562 137.15625 L 221.867188 138.269531 C 221.914062 141.535156 221.089844 144.75 219.519531 147.585938 C 217.980469 150.324219 215.730469 152.710938 212.84375 154.433594 C 209.976562 156.152344 206.820312 156.996094 203.683594 157.027344 C 200.796875 157.074219 197.925781 156.421875 195.328125 155.164062 Z M 177.507812 151.835938 C 177.363281 149.65625 176.730469 147.519531 175.667969 145.59375 C 174.449219 143.429688 172.671875 141.535156 170.390625 140.164062 C 168.105469 138.796875 165.601562 138.125 163.128906 138.09375 C 160.941406 138.0625 158.769531 138.539062 156.789062 139.464844 C 156.929688 141.644531 157.546875 143.777344 158.625 145.707031 C 159.832031 147.871094 161.605469 149.765625 163.890625 151.121094 C 166.1875 152.488281 168.691406 153.15625 171.167969 153.191406 C 173.355469 153.222656 175.527344 152.761719 177.507812 151.835938 Z M 179.015625 143.714844 C 180.582031 146.550781 181.40625 149.765625 181.359375 153.015625 L 181.34375 154.128906 L 180.378906 154.671875 C 177.554688 156.261719 174.351562 157.074219 171.117188 157.042969 C 167.980469 156.996094 164.824219 156.152344 161.941406 154.433594 C 159.054688 152.710938 156.820312 150.324219 155.28125 147.585938 C 153.695312 144.75 152.886719 141.535156 152.933594 138.269531 L 152.933594 137.15625 L 153.902344 136.613281 C 156.722656 135.039062 159.941406 134.210938 163.175781 134.257812 C 166.316406 134.304688 169.46875 135.132812 172.339844 136.851562 C 175.226562 138.589844 177.476562 140.976562 179.015625 143.714844 Z M 199.132812 145.59375 C 198.054688 147.519531 197.433594 149.65625 197.292969 151.835938 C 199.273438 152.761719 201.445312 153.222656 203.632812 153.191406 C 206.105469 153.15625 208.613281 152.488281 210.894531 151.121094 C 213.179688 149.765625 214.953125 147.871094 216.175781 145.707031 C 217.238281 143.777344 217.871094 141.644531 218.011719 139.464844 C 216.03125 138.539062 213.859375 138.0625 211.671875 138.09375 C 209.199219 138.125 206.695312 138.796875 204.394531 140.164062 C 202.128906 141.535156 200.335938 143.429688 199.132812 145.59375 Z M 179.695312 130.085938 C 181.1875 132.679688 183.152344 134.957031 185.480469 136.820312 L 185.480469 120.722656 L 189.320312 120.722656 L 189.320312 136.820312 C 191.648438 134.957031 193.613281 132.679688 195.105469 130.085938 C 197.101562 126.613281 198.242188 122.570312 198.242188 118.238281 C 198.242188 113.921875 197.101562 109.878906 195.105469 106.390625 C 193.21875 103.128906 190.570312 100.339844 187.398438 98.285156 C 184.230469 100.339844 181.582031 103.128906 179.695312 106.390625 C 177.699219 109.878906 176.554688 113.921875 176.554688 118.238281 C 176.554688 122.570312 177.699219 126.613281 179.695312 130.085938 Z M 156.375 171.996094 C 158.800781 171.789062 161.875 172.488281 165.410156 174.222656 C 168.914062 175.945312 173.003906 178.699219 177.492188 182.617188 C 181.136719 178.507812 183.4375 176.007812 184.722656 174.636719 C 180.125 170.132812 175.128906 167.664062 170.5 166.453125 C 163.652344 164.671875 157.707031 165.53125 154.933594 166.644531 C 155.328125 168.492188 155.820312 170.273438 156.375 171.996094 Z M 174.957031 185.496094 C 170.753906 181.835938 166.964844 179.273438 163.730469 177.679688 C 161.351562 176.515625 159.355469 175.910156 157.785156 175.800781 C 160.578125 182.550781 164.492188 188.203125 168.597656 192.839844 C 170.992188 190.035156 173.101562 187.601562 174.957031 185.496094 Z M 218.394531 172.027344 C 218.964844 170.292969 219.457031 168.507812 219.867188 166.644531 C 217.078125 165.53125 211.132812 164.671875 204.300781 166.453125 C 199.226562 167.773438 193.742188 170.59375 188.796875 175.945312 L 188.746094 175.992188 L 188.714844 176.039062 L 187.398438 177.457031 L 187.367188 177.441406 C 185.195312 179.75 180.265625 185.132812 171.230469 195.640625 C 173.941406 198.378906 176.636719 200.65625 179.0625 202.503906 C 186.878906 192.136719 194.21875 184.703125 200.527344 179.78125 C 207.976562 173.984375 214.238281 171.613281 218.394531 172.027344 Z M 218.394531 172.027344 " fill-opacity="1" fill-rule="evenodd"/></g></svg>
    //                                  <label class=".inside-page__add-fav">
    //                                     <input type="checkbox">
    //                                     <i class=".inside-page__icon-heart">
    //                                     <i class=".inside-page__icon-plus-sign"></i>
    //                                     </i>
    //                                 </label>                 
    //                           </div>
    //                         </div>
    //                       </div>
    //                       <div class="inside-page">
    //                        <div class="inside-page__container">
    //             <h2 class="inside-page__heading">Plant Info</h2>
    //             <p class="card-desc"><strong>Dimension:</strong> ${plant.dimension}</p>
    //             <p class="card-desc"><strong>Propogation:</strong> ${plant.propogation}</p>
    //             <p class="card-desc"><strong>Water Needs:</strong> ${plant.watering}</p> <p class="card-desc">Sunlight needs: ${plant.sunlight}</p>
    //             <p class="card-desc"><strong>Pruning Month:</strong> ${plant.pruning_month}</p>
    //             <p class="card-desc"><strong>Growth Rate:</strong> ${plant.growth_rate}</p>
    //             <p class="card-desc"><strong>Harvest Season:</strong> ${plant.harvest_season}</p>
    //             <p class="card-desc"><strong>Flower Color:</strong> ${plant.flower_color}</p>
    //             </div>
    //             </div>
    //             </li>`
                
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
       
        //this.renderPlantButtonList(this.plant);
    }

    async plantButtonSetEventListener(plant) {
        const buttons = document.querySelectorAll(".plant-button")
        buttons.forEach(button => {
            button.addEventListener("click", async () => {
                //Get common_name from button dataset data-info
                const commonName = button.dataset.info;
                console.log(commonName);
                console.log(plant);
                const plantData = [plant.find(item => item.common_name === commonName)];
                console.log(plantData);
                if (plantData) {
                
                
                
                await this.renderPlantCard(plantData);
                }
                
            });
        });
     }
    

    
   
    renderPlantButtonList(plant) {
       renderNoImageListWithTemplate(createPlantButtonsTemplate, this.element, plant, "afterbegin", false);
       console.log(plant);
    }

    async renderPlantCard(plant){
        await renderImagesListWithTemplate(createPlantCard, this.element, plant, "afterbegin", false);
            console.log(plant);
    }
    
   

    async buttonFunctionality(plant){
        await this.plantButtonSetEventListener(plant);
    }    
} 
    
     

  


    


    

