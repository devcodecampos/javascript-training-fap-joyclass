## 🚀 Desafio Lista Encadeada
- ### Crie uma lista encadeada em que cada elemento representa uma pessoa. Ela precisa conter informações como nome, idade e referência ao filho dela.

  ```js
  // Trecho do Código
  import { ListNode } from "./ListNode.mjs";

  export class LinkedList {
    constructor() {
      this.head = null;
    }

    setFirst(name, age) {
      const newNode = new ListNode(name, age);
      newNode.next = this.head;
      this.head = newNode;
    }

    getFirst() {
      return this.head;
    }

    removeFirst() {
      if (!this.head) {
        return null;
      }

      const removedNode = this.head;
      this.head = this.head.next;
      removedNode.next = null;
      return removedNode;
    }

    setLast(name, age) {
      const newNode = new ListNode(name, age);

      if (!this.head) {
        this.head = newNode;
      } else {
        let currentNode = this.head;
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
        currentNode.next = newNode;
      }
    }

    getLast() {
      let lastNode = this.head;
      if (lastNode) {
        while (lastNode.next) {
          lastNode = lastNode.next;
        }
      }
      return lastNode;
    }

    removeLast() {
      if (!this.head) {
        return null;
      }

      if (!this.head.next) {
        const removedNode = this.head;
        this.head = null;
        return removedNode;
      }

      let currentNode = this.head;
      let previousNode = null;

      while (currentNode.next) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = null;
      return currentNode;
    }

    size() {
      let count = 0;
      let currentNode = this.head;
      while (currentNode) {
        count++;
        currentNode = currentNode.next;
      }
      return count;
    }
    clear() {
      this.head = null;
    }
  }    
  ```

- ### Dependencias
  
  [nodemon](https://www.npmjs.com/package/nodemon) 📝🔗
   ```
  npm install -D nodemon
   ```

- ### Execução do Projeto
    ```
    git clone https://github.com/devcodecampos/javascript-training-fap-joyclass.git

    cd modulo-03-algoritmos-estruturas-de-dados/linked-list

    npm install

    npm run dev
    ```
