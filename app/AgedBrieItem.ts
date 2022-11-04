import { Item } from "./Item";
import { VerifyItem } from "./VerifyItem";

export class AgedBrieItem extends Item {
  constructor(sellIn?: number, quality?: number) {
    super("Aged Brie", sellIn, quality);
  }

  execute(item: Item): Item {
    if (VerifyItem.verifyQuality(item.quality)) {
      if (item.sellIn <= 50 && item.sellIn > 10) {
        item.quality += 1;
        item.sellIn--;
      } else if (item.sellIn <= 10 && item.sellIn > 5) {
        item.quality += 2;
        item.sellIn--;
      } else if (item.sellIn <= 5 && item.sellIn > 0) {
        item.quality += 3;
        item.sellIn--;
      } else {
        item.quality = 0;
      }
    }
    return item;
  }
  static showItem(item: Item) {
    const itemProperties = ["Aged Brie", item.sellIn, item.quality];

    return itemProperties;
  }
}
