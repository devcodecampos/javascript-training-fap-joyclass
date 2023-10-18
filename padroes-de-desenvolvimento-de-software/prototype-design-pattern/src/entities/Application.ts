import { Vehicle } from "./Vehicle";
import { Car } from "./Car";
import { Motorcycle } from "./Motorcycle";

export class Application {
  private vehicles: Vehicle[] = [];

  constructor() {
    const car = new Car("dodge", "dodge charger", "black", 4, 2);
    this.vehicles.push(car);

    const car2 = car.clone();
    this.vehicles.push(car2);

    const car3 = car.clone();
    this.vehicles.push(car3);

    const motorcycle = new Motorcycle(
      "yamaha",
      "mt-07",
      "black",
      2,
      "sport handlebars"
    );
    this.vehicles.push(motorcycle);

    const motorcycle2 = motorcycle.clone();
    this.vehicles.push(motorcycle2);

    const motorcycle3 = motorcycle.clone();
    this.vehicles.push(motorcycle3);
  }

  getVehicles(): Vehicle[] {
    return this.vehicles;
  }

  makeCopiesOfVehicles(): Vehicle[] {
    const vehiclesCopy: Vehicle[] = [];

    this.vehicles.forEach((vehicle) => {
      vehiclesCopy.push(vehicle.clone());
    });

    return vehiclesCopy;
  }
}
