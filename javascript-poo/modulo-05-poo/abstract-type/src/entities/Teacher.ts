import { Person } from "./Person";

export class Teacher extends Person {
  private yearsOfService: number;

  constructor(
    name: string,
    age: number,
    gender: string,
    yearsOfService: number
  ) {
    super(name, age, gender);
    this.yearsOfService = yearsOfService;
  }

  getYearsOfService(): number {
    return this.yearsOfService;
  }

  introduce(): void {
    console.log("I am a teacher");
  }
}