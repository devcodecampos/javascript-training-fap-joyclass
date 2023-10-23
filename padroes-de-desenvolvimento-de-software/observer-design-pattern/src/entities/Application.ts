import { EmailAlertsListener } from "./EmailAlertsListener";
import { LoggingListener } from "./LoggingListener ";
import { TextEditor } from "./TextEditor";

export class Application {
  config(): void {
    const textEditor = new TextEditor();
    textEditor.openFile(
      "C:/Users/matheuscampos/Desktop/project/javascript-training-fap-joyclass/padroes-de-desenvolvimento-de-software/observer-design-pattern/src/example.txt"
    );
    textEditor.getEvents().subscribe("open", {
      update: (filename) => {
        console.log(`Opened file: ${filename}`);
      },
    });

    textEditor.getEvents().subscribe("save", {
      update: (filename) => {
        console.log(`Saved file: ${filename}`);
      },
    });

    textEditor.processUserInput();

    const logger = new LoggingListener(
      "C:/Users/matheuscampos/Desktop/project/javascript-training-fap-joyclass/padroes-de-desenvolvimento-de-software/observer-design-pattern/src/log.txt",
      "Someone has changed the file: %s"
    );
    textEditor.getEvents().subscribe("save", logger);

    const emailAlerts = new EmailAlertsListener(
      "devcodecampos@gmail.com",
      "Someone has changed the file: %s"
    );
    textEditor.getEvents().subscribe("save", emailAlerts);
  }
}
