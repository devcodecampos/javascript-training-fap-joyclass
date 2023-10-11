import { Computer } from "./Computer";

export class Server extends Computer {
  constructor(ram: number, hdd: number, cpu: number) {
    super(ram, hdd, cpu, "server");
  }
}