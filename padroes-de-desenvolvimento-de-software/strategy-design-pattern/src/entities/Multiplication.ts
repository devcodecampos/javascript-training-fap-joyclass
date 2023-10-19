import { IStrategy } from "../interfaces/IStrategy";

export class Multiplication implements IStrategy {
  execute(a: number, b: number): number {
    return a * b;
  }
}