import { Item } from "./Item";
import prompt from "prompt-sync";
import { BackstageItem } from "./BackstageItem";
import { ConjuredItem } from "./ConjuredItem";
import { SulfurasItem } from "./SulfurasItem";
import { AgedBrieItem } from "./AgedBrieItem";
import { GildedRose } from "./GildedRose";

let teclado = prompt();
let option: any = 0;
let sellin: number;
let quality: number;
let name: string;

const array: Item[] = [];

while (option != 9) {
  console.log("+==================Gilded Rose==================+");
  console.log("|1.Add Backstage pass sell in and quality       |");
  console.log("|2.Add Conjured Item sell in and quality        |");
  console.log("|3.Add Sulfuras sell in                         |");
  console.log("|4.Add another Item (name, sellin and quality)  |");
  console.log("|5.Add Aged Brie sell in and quality  |");
  console.log("|6.Show conditons after set amount of days      |");
  console.log("|9.Exit menu                                    |");
  console.log("+===============================================+");

  option = +teclado("Choose an action: ");

  switch (option) {
    case 1:
      sellin = +teclado("Add sellin: ");
      quality = +teclado("Add quality: ");

      const backstage = new BackstageItem(sellin, quality);
      array.push(backstage);

      console.log("Item added successfully!");
      break;
    case 2:
      sellin = +teclado("Add sellin: ");
      quality = +teclado("Add quality: ");
      const conjured = new ConjuredItem(sellin, quality);
      array.push(conjured);
      console.log("Item added successfully!");
      break;
    case 3:
      sellin = +teclado("Add sellin: ");
      const sulfuras = new SulfurasItem(sellin);
      array.push(sulfuras);
      console.log("Item added successfully!");

      break;
    case 4:
      name = teclado("Add new items's name:");
      sellin = +teclado("Add sellin: ");
      quality = +teclado("Add quality: ");
      const extraItem = new Item(name, sellin, quality);
      array.push(extraItem);
      console.log("Item added successfully!");
      break;
    case 5:
      sellin = +teclado("Add sellin: ");
      quality = +teclado("Add quality: ");

      const agedBrie = new AgedBrieItem(sellin, quality);
      array.push(agedBrie);
      console.log("Item added successfully!");
      break;
    case 6:
      if (array.length == 0) {
        console.log("Error, cannot show empty stock, first add some items");
      } else {
        const gildedRose = new GildedRose();

        option = +teclado("Set an amount of days: ");
        let days = option;

        if (days < 1) {
          console.log("You must add at least one day");
        } else {
          for (let i = 1; i <= days; i++) {
            console.log(`-------- day ${i}  --------`);
            array.forEach((element) => {
              console.log(element);
            });
            console.log();
            gildedRose.updateQuality(array);
          }
        }
        break;
      }
  }
}
