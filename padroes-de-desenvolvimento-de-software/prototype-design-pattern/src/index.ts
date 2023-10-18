import { Application } from "./entities/Application";

const app = new Application();

app.makeCopiesOfVehicles().forEach((vehicle) => {
  console.log(vehicle.represent());
});