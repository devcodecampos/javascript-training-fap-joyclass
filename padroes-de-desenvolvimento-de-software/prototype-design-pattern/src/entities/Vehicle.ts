export abstract class Vehicle {
  protected brand: string;
  protected model: string;
  protected color: string;
  protected numberOfWheels: number;

  constructor(
    brand: string,
    model: string,
    color: string,
    numberOfWheels: number
  ) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.numberOfWheels = numberOfWheels;
  }

  abstract clone(): Vehicle;
  abstract represent(): string;
}