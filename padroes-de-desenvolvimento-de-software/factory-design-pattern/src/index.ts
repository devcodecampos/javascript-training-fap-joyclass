import { ComputerFactory } from "./entities/ComputerFactory";

console.log("FACTORY DESIGN PATTERN")

const server = ComputerFactory.createComputer(32, 512, 4.5, "server");
console.log(`
SERVER
${server.toString()}`);

const desktop = ComputerFactory.createComputer(32, 512, 4.5, "desktop");

console.log(`
DESKTOP
${desktop.toString()}`);