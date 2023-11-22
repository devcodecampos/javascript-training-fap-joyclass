import { SecuritySystem } from "./entities/SecuritySystem";

const securitySystem = SecuritySystem.getInstance();

console.log(securitySystem.accessSecretBase("w43"));
console.log(securitySystem.accessSecretBase("783ri21"));
