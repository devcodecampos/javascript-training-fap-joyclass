export class SecuritySystem {
  private static instance: SecuritySystem;
  private password = "783ri21";

  private constructor() {}

  static getInstance(): SecuritySystem {
    if (!SecuritySystem.instance) {
      SecuritySystem.instance = new SecuritySystem();
    }

    return SecuritySystem.instance;
  }

  accessSecretBase(password: string): string {
    if (this.password !== password) {
      return "Permission Denied";
    }

    SecuritySystem.getInstance();
    return "Secret Base Successfully Accessed";
  }
}
