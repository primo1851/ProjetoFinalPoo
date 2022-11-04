import { Item } from "./Item";

export class GildedRose {
  updateQuality(array: Item[]): Item[] {
    for (let i = 0; i < array.length; i++) {
      array[i].execute(array[i]);
    }
    return array;
  }
}
