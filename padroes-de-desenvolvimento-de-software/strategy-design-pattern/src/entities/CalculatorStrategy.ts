import { IStrategy } from "../interfaces/IStrategy";

export class CalculatorStrategy {
  private calculatorStrategy: IStrategy;

  constructor(calculatorStrategy: IStrategy) {
    this.calculatorStrategy = calculatorStrategy;
  }
  
  setCalculatorStrategy(calculatorStrategy: IStrategy) {
    this.calculatorStrategy = calculatorStrategy;
  }

  executeCalculatorStrategy(a: number, b: number): number {
    return this.calculatorStrategy.execute(a, b);
  }
}