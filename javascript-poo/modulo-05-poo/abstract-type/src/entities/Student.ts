import { Person } from "./Person";

export class Student extends Person {
  private studentClass: string;

  constructor(name: string, age: number, gender: string, studentClass: string) {
    super(name, age, gender);
    this.studentClass = studentClass;
  }

  getStudentClass(): string {
    return this.studentClass;
  }

  introduce(): void {
    console.log("I am a student");
  }
}