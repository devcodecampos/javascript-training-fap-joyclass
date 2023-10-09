import { Student } from "./entities/Student";
import { Teacher } from "./entities/Teacher";

const student = new Student("Matheus", 27, "M", "Softex-backend");
const teacher = new Teacher("Carlos", 48, "M", 5);

student.display();
student.introduce();

teacher.display();
teacher.introduce();
