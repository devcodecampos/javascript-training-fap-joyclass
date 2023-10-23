import { IEventListener } from "./IEventListener";

export interface ISubject {
  subscribe(eventType: string, listener: IEventListener): void;
  unsubscribe(eventType: string, listener: IEventListener): void;
  notify(eventType: string, data: string): void;
}
