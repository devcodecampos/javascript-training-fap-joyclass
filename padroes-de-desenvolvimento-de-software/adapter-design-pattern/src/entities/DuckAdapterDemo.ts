import { Duck } from "./Duck";
import { DuckAdapter } from "./DuckAdapter";

export class DuckAdapterDemo {
  static testAdapter(): void {
    const duck = new Duck();
    const adapter = new DuckAdapter(duck);

    console.log("\nDuck Adapter:");
    adapter.shortDistanceFlight();

    console.log("\nOriginal Duck:");
    duck.longDistanceFlight()
  }
}