import { IDuck } from "../interfaces/IDuck";

export class Duck implements IDuck{
  longDistanceFlight(): void {
    console.log("flying a long distance");
  }
}