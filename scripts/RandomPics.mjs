//module to randomize pictures for plantCards




export default class RandomPics {
    constructor() {
       this.pathway = "json/gardenPics.json";
    }

    //async method to fetch data from json source
    async getGardenPics() {
        const response = await fetch(this.pathway);
        const data = await response.json();
        console.log(data.garden_pics);

        const gardenPics = data.garden_pics;
    
        //choose 3 random pics
        const randomGardenPics = [];
        for (let i = 0; i <3; i++) {
            const index = Math.floor(Math.random() * gardenPics.length);
            const pic = gardenPics[index];
            randomGardenPics.push(pic);

            //removes a pic from the list so that it won't be repeated
            gardenPics.splice(index, 1);
            
        }
        return randomGardenPics;
    }    
}