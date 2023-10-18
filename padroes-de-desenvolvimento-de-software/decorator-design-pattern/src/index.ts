import { MozzarellaCheeseDecorator } from "./entities/MozzarellaCheeseDecorator";
import { PepperoniDecorator } from "./entities/PepperoniDecorator";
import { RoastChicken } from "./entities/RoastChicken";
import { Sandwich } from "./entities/Sandwich";

let sandwich: Sandwich = new RoastChicken();

sandwich = new PepperoniDecorator(sandwich);
sandwich = new MozzarellaCheeseDecorator(sandwich);
console.log(`ORDER: {
${sandwich.description}, cost: $${sandwich.cost.toFixed(2)}}`);