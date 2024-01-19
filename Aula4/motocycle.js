import Vehicle from "./vehicle.js";

export default class Motorcycle extends Vehicle {

    constructor(){
        super();

        this.speed = 50;
        console.log("Motorcycle speed is", this.speed);

    }

}