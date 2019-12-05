const {
    Aged_Brie, 
    Conjured_Item, 
    Item, 
    Legendary_Item, 
    Tickets, 
    HealthStone
} = require('../app/items');



let Default1 = new Aged_Brie('Aged Brie', 2, 0);
let PastSellBy1 = new Aged_Brie('Aged Brie', 0, 0);
let Default2 = new Conjured_Item('Conjured Mana Biscuit', 2, 10);
let PastSellBy2 = new Conjured_Item('Conjured Mana Biscuit', 0, 0);
let Default3 = new Item('+5 Dexterity Vest', 10, 20);
let PastSell_in3 = new Item('+5 Dexterity Vest', 0, 20);
let Default4 = new Legendary_Item('Sulfuras, Hand of Ragnaros', 0, 80);
let PastSellBy4 = new Legendary_Item('Sulfuras, Hand of Ragnaros', -1, 80);
let Default5 = new Tickets('Backstage passes to a TAFKAL80ETC concert', 15, 20);
let MaxQuality = new Tickets('Backstage passes to a TAFKAL80ETC concert', 15, 50);
let QualityPlusTwo = new Tickets('Backstage passes to a TAFKAL80ETC concert', 11, 0);
let QualityPlusThree = new Tickets('Backstage passes to a TAFKAL80ETC concert', 6, 0);
let PastSellDate5 = new Tickets('Backstage passes to a TAFKAL80ETC concert', 0, 40);
let Healthstone = new HealthStone('Lock Rocks', 10, 20);

items = [
    Default1,
    PastSellBy1,
    Default2,
    PastSellBy2,
    Default3,
    PastSell_in3,
    Default4,
    PastSellBy4,
    Default5,
    MaxQuality,
    QualityPlusTwo,
    QualityPlusThree,
    PastSellDate5,
    Healthstone

];

console.log("Day 1:");
console.log(items);
console.log("-----End of day------");


for(i = 0; i < items.length; i++){
    items[i].UpdateItem();
}


console.log("Day 2:");
console.log(items);
console.log("-----End of day------");