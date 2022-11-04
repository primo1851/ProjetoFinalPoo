import { Item } from "./Item";
import { VerifyItem } from "./VerifyItem";

export class ConjuredItem extends Item {
  static sellIn;
  static quality;
  constructor(sellIn?: number, quality?: number) {
    super("Conjured Mana Cake", sellIn, quality);
  }

  execute(item: Item): Item {
    if (VerifyItem.verifySellIn(item.sellIn)) {
      item.sellIn--;
      item.quality -= 2;
    } else {
      item.quality = 0;
    }
    return item;
  }
  static showItem() {
    const items = [
      "Conjured Mana Cake",
      ConjuredItem.sellIn,
      ConjuredItem.quality,
    ];

    return items;
  }
}
