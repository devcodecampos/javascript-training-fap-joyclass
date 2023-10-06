import "reflect-metadata";
import { AppDataSource } from "./database/data-source";

const initApp = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized!")

  } catch (error: any) {
    console.log({ message: "Error when trying to init App" });
    console.log({ error: error.message });
  }
};

initApp();