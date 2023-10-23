import { readFileSync, writeFileSync } from "fs";
import * as readline from "readline";
import { Editor } from "./Editor";

export class TextEditor extends Editor {
  private lines: string[] = [];

  constructor() {
    super();
  }

  insertLine(lineNumber: number, text: string): void {
    this.lines.splice(lineNumber, 0, text);
  }

  removeLine(lineNumber: number): void {
    if (lineNumber >= 0 && lineNumber < this.lines.length) {
      this.lines.splice(lineNumber, 1);
    }
  }

  openFile(path: string): void {
    super.openFile(path);
    if (this.getFilePath()) {
      const fileData = readFileSync(this.getFilePath(), "utf8");
      this.lines = fileData.split("\n");
    }
  }

  saveFile(): void {
    const data = this.lines.join("\n");
    if (this.getFilePath()) {
      writeFileSync(this.getFilePath(), data, "utf8");
      super.saveFile(data);
    }
  }

  async processUserInput(): Promise<void> {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    console.log("Enter lines of text. Type 'EOF' to finish.");

    for await (const line of rl) {
      if (line === "EOF") {
        rl.close();
        this.saveFile();
        this.printFileContent();
        break;
      }
      this.lines.push(line);
    }
  }

  printFileContent(): void {
    console.log("File Content:");
    for (const line of this.lines) {
      console.log(line);
    }
  }
}