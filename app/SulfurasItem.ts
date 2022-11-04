import { Item } from "./Item";
import { VerifyItem } from "./VerifyItem";

export class SulfurasItem extends Item {
  static sellIn;
  constructor(sellIn?: number) {
    super("Sulfuras, Hand of Ragnaros", sellIn, 80);
  }

  execute(item: Item): Item {
    if (VerifyItem.verifySellIn(item.sellIn)) {
      item.sellIn = item.sellIn;
    }
    return item;
  }
  static showItem() {
    const items = ["Sulfuras, Hand of Ragnaros", SulfurasItem.sellIn, 80];

    return items;
  }
}
