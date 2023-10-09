export abstract class Person {
  private name: string;
  private age: number;
  private gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  getGender(): string {
    return this.gender;
  }

  abstract introduce(): void;

  display(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
  }
}