import { IStrategy } from "../interfaces/IStrategy";

export class Subtraction implements IStrategy {
  execute(a: number, b: number): number {
    return a - b;
  }
}