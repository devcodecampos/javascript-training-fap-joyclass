import { IComputer } from "../interfaces/IComputer";

export abstract class Computer implements IComputer {
  ram: number;
  hdd: number;
  cpu: number;
  type: string;

  constructor(ram: number, hdd: number, cpu: number, type: string) {
    this.ram = ram;
    this.hdd = hdd;
    this.cpu = cpu;
    this.type = type;
  }

  getRam(): number {
    return this.ram;
  }

  getHdd(): number {
    return this.hdd;
  }

  getCpu(): number {
    return this.cpu;
  }

  getType(): string {
    return this.type;
  }

  toString(): string {
    const display: string = `RAM: ${this.ram}, HDD: ${this.hdd}, CPU: ${this.cpu}, TYPE: ${this.type}`;
    return display;
  }
}