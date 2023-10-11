import { Computer } from "./Computer";

export class Desktop extends Computer {
  constructor(ram: number, hdd: number, cpu: number) {
    super(ram, hdd, cpu, "desktop");
  }
}
