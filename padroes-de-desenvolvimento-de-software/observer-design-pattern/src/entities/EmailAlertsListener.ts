import { IEventListener } from "../interfaces/IEventListener";

export class EmailAlertsListener implements IEventListener {
  private email: string;
  private message: string;

  constructor(email: string, message: string) {
    this.email = email;
    this.message = message;
  }

  update(filename: string): void {
    console.log(
      `Sending email to ${this.email}: ${this.message.replace("%s", filename)}`
    );
  }
}
