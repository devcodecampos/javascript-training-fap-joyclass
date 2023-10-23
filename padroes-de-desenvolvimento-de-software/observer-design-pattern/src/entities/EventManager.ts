import { IEventListener } from "../interfaces/IEventListener";
import { ISubject } from "../interfaces/ISubject";

export class EventManager implements ISubject {
  private listeners: Map<string, IEventListener[]>;

  constructor() {
    this.listeners = new Map();
  }

  subscribe(eventType: string, listener: IEventListener): void {
    if (!this.listeners.has(eventType)) {
      this.listeners.set(eventType, []);
    }
    this.listeners.get(eventType)?.push(listener);
  }
  unsubscribe(eventType: string, listener: IEventListener): void {
    if (this.listeners.has(eventType)) {
      const listeners = this.listeners.get(eventType);
      this.listeners.set(
        eventType,
        listeners?.filter((lis) => lis !== listener) || []
      );
    }
  }
  notify(eventType: string, data: string): void {
    const listeners = this.listeners.get(eventType) || [];
    for (const listener of listeners) {
      listener.update(data);
    }
  }
}