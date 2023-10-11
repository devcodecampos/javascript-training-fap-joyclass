import { IComputer } from "../interfaces/IComputer";
import { Desktop } from "./Desktop";
import { Server } from "./Server";

export class ComputerFactory {
  static createComputer(
    ram: number,
    hdd: number,
    cpu: number,
    type: string
  ): IComputer {
    if (type === "server") {
      return new Server(ram, hdd, cpu);
    } else if (type === "desktop") {
      return new Desktop(ram, hdd, cpu);
    } else {
      throw new Error("Computer type not supported");
    }
  }
}