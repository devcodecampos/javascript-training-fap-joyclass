import { IEventListener } from "../interfaces/IEventListener";
import { writeFileSync } from "fs";

export class LoggingListener implements IEventListener {
  private logFilename: string;
  private message: string;

  constructor(logFilename: string, message: string) {
    this.logFilename = logFilename;
    this.message = message;
  }

  update(filename: string): void {
    const logMessage = this.message.replace("%s", filename) + "\n";
    writeFileSync(this.logFilename, logMessage, { flag: "a" });
  }
}