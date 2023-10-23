import { EventManager } from "./EventManager";
import { readFileSync, writeFileSync } from "fs";

export class Editor {
  private events: EventManager;
  private filePath: string;

  constructor() {
    this.events = new EventManager();
    this.filePath = "";
  }

  getEvents(): EventManager {
    return this.events;
  }

  getFilePath(): string {
    return this.filePath;
  }

  openFile(path: string): void {
    this.filePath = path;
    if (this.filePath) {
      const fileData = readFileSync(this.filePath, "utf8");
      this.events.notify("open", fileData);
    }
  }

  saveFile(data: any) {
    if (this.filePath) {
      writeFileSync(this.filePath, data, "utf8");
      this.events.notify("save", data);
    }
  }
}
