import { Sandwich } from "./Sandwich";

export class PepperoniDecorator extends Sandwich {
  constructor(sandwich : Sandwich) {
    const description: string = sandwich.description + ", Pepperoni"
    const cost: number = sandwich.cost + 0.99
    super(description, cost);
  }
}