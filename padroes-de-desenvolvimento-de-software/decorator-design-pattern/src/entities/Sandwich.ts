export abstract class Sandwich{
  description: string;
  cost: number

  constructor(description: string, cost: number) {
    this.description = description;
    this.cost = cost
  }
}