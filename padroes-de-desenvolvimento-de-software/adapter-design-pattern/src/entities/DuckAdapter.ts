import { IChicken } from "../interfaces/IChicken";
import { Duck } from "./Duck";

export class DuckAdapter implements IChicken {
  private duck: Duck;

  constructor(duck: Duck) {
    this.duck = duck;
  }

  shortDistanceFlight(): void {
    console.log("Duck behaving like Chicken");
    this.duck.longDistanceFlight()
  }
}