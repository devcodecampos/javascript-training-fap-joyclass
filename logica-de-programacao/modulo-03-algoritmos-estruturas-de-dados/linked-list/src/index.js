import { LinkedList } from "./entities/LinkedList.mjs";

let list = new LinkedList();

list.setFirst("Matheus", 27);
list.setLast("John", 20);

console.log(list.getFirst());
console.log(list.getLast());
console.log(list.size());