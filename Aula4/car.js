import Vehicle from "./vehicle.js";

export default class Car extends Vehicle {


    constructor() {
        super();
        this.speed = 20
        console.log(this.speed)
    }

}