import { Sandwich } from "./Sandwich";

export class MozzarellaCheeseDecorator extends Sandwich {
  constructor(sandwich : Sandwich) {
    const description: string = sandwich.description + ", Mozzarella Cheese"
    const cost: number = sandwich.cost + 2
    super(description, cost);
  }
}