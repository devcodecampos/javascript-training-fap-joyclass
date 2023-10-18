import { Vehicle } from "./Vehicle";

export class Motorcycle extends Vehicle {
  private handlebarType: string;

  constructor(
    brand: string,
    model: string,
    color: string,
    numberOfWheels: number,
    handlebarType: string
  ) {
    super(brand, model, color, numberOfWheels);
    this.handlebarType = handlebarType;
  }

  clone(): Vehicle {
    return new Motorcycle(
      this.brand,
      this.model,
      this.color,
      this.numberOfWheels,
      this.handlebarType
    );
  }
  represent(): string {
    return `SHIP { BRAND: ${this.brand}, MODEL: ${this.model}, COLOR: ${this.color}, NUMBEROFWHEELS: ${this.numberOfWheels}, CRUISINGSPEED: ${this.handlebarType} }`;
  }
}
