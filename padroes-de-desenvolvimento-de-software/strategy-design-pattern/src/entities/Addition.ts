import { IStrategy } from "../interfaces/IStrategy";

export class Addition implements IStrategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}