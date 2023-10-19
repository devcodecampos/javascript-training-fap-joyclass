import { IChicken } from "../interfaces/IChicken";

export class Chicken implements IChicken{
  shortDistanceFlight(): void {
    console.log("flying a short distance");
  }
}