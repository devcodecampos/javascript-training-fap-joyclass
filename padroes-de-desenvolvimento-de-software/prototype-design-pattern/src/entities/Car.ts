import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {
  private numberOfDoors: number;

  constructor(
    brand: string,
    model: string,
    color: string,
    numberOfWheels: number,
    numberOfDoors: number
  ) {
    super(brand, model, color, numberOfWheels);
    this.numberOfDoors = numberOfDoors;
  }

  clone(): Vehicle {
    return new Car(
      this.brand,
      this.model,
      this.color,
      this.numberOfWheels,
      this.numberOfDoors
    );
  }
  represent(): string {
    return `CAR { BRAND: ${this.brand}, MODEL: ${this.model}, COLOR: ${this.color}, NUMBEROFWHEELS: ${this.numberOfWheels}, NUMBEROFDOORS: ${this.numberOfDoors} }`;
  }
}