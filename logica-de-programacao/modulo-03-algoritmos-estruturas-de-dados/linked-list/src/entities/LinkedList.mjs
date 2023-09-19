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
