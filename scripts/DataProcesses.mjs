//Module that processes data from API fetches


//import calls
import APIInteractions from "./APIInteractions.mjs";


//Constructor
const apiInteractions = new APIInteractions();






//DataProcesseing class
export default class DataProcesses {
    constructor() {
        
    }

    async createArrayFromObj() {

        //get data from Perenual. Data is returned as a flattened array
        const returnedArrays = await apiInteractions.fetchPlantData();
        
        //Take flatData and create an array of extracted obj.common_name properties
        const objWithCommonNames = returnedArrays.data.filter(data => data.hasOwnProperty("common_name"));

        return objWithCommonNames;        
   }        
    
   

    //Use objWithCommonName array to create an array of uniqueCommonNames
    async createUniqueCommonNames() {
        
        const  commonNames = await this.createArrayFromObj();

        //Create empty array to hold uniquePlantNameObj
        const uniqueCommonNames = [];

        //Iterate through the commonNames array to create a uniquecommonNames array
        commonNames.forEach((plant) => {
            //check to see if common_name is unique
            const existingItem = uniqueCommonNames.find( (item) => {
                return item.common_name === plant.common_name
            });
        
            if (!existingItem) {
                uniqueCommonNames.push(plant);
            }
            
         });
        // console.log(uniqueCommonNames);
         return uniqueCommonNames;
    }

    async getPropertyValuesFromArray (array, propertyName) {
        const propertyValues = array.map(item => item[propertyName]);
        return propertyValues;
    }

    // //Get common_name values from uniqueCommonNames
    // async getPlantNames() {
    //     const uniqueCommonNames = await this.createUniqueCommonNames();

    //     //create empty array to hold name values
    //     const plantNames = [];

    //     //Iterate uniqueCommonNames array to return common_name values
    //     for (const plant of uniqueCommonNames) {
    //         plantNames.push(plant.common_name);
    //     }
    //     return plantNames;
    // }

    async getIdValues() {
        const uniqueCommonNames = await this.createUniqueCommonNames();
        const idValues = await this.getPropertyValuesFromArray(uniqueCommonNames, "id");
        return idValues;
    }

    

    // //Get id values from  uniqueCommonNames
    // async getIdValues() {
    //     const uniqueCommonNames = await this.createUniqueCommonNames();

    //     //create empty array to hold id values
    //     const detailIds = []

    //     //Iterate uniqueCommonNames to return the id values in the array detailIds
    //     for (const plant of uniqueCommonNames) {
    //         detailIds.push(plant.id);
    //     }
    //     return detailIds;
    // }

    async getPlantNames() {
        const uniqueCommonNames = await this.createUniqueCommonNames();
        const plantNames = await this.getPropertyValuesFromArray(uniqueCommonNames,"common_name");
        console.log(plantNames);
        return plantNames;
    }


    //Use id values to create a details Array
      async createDetailsArray() {
        //array of id values from dataProcesses
        const idValues = await this.getIdValues();

        //create empty array to hold Details promises
        const detailsPromises = [];

        //Iterate through idValues to construct URLS for fetch calls
        for (const id of idValues) {
            const detailsPromise = await apiInteractions.fetchPlantDetails(id);
            detailsPromises.push(detailsPromise);                
        }
            


        //Wait for all fetch calls to resolve
        const plantDetails = await Promise.all(detailsPromises);
        //console.log(plantDetails);
        //Use .flatMap to extract values from array
        //const plantInfo = plantDetails.flatMap(this.extractValues.bind(this));
            console.log(plantDetails);
        // //Add an eventlistener to the img tag
        // const promises = plantDetails.map(img =>  new Promise(response =>
        //     img.onload = () => response ([img.width, img.height])
        //     ))

        // //list all image widths and heights _after_ the images have loaded:
        // Promise.all(promises).then(data => {
        //     console.log("The images have loaded")
        //     console.log(data);
        // })

        // plantDetails.forEach(item => {
        //     const img = new Image();
        //     img.src = item.default_image.original_url;
        //     img.onload = () => {
                
        //         console.log("Image has loaded", img.src);
        //     };
            
        // });

        //console.log(plantInfo);
        return plantDetails;
    }
}
