class StandardItem {
  constructor(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;    
  }
  
  UpdateSellIn() {
    this.sell_in--;
  }

  UpdateQuality(){
    this.quality = this.sell_in < 0 ? this.quality - 2 : this.quality - 1;
  }

  HandleMinMaxQuality() {
    (this.quality < 0) && (this.quality = 0);
    (this.quality > 50) && (this.quality = 50);
  }

  UpdateItem() {
    this.UpdateSellIn();
    this.UpdateQuality();
    this.HandleMinMaxQuality();
  }
}

class Tickets extends StandardItem {
  constructor(name, sell_in, quality){
    super(name, sell_in, quality);
  }

  UpdateQuality() {
    if (this.sell_in < 0) {
      this.quality = 0;
    } else {
      this.quality++;
      (this.sell_in <= 10) && (this.quality++);
      (this.sell_in <= 5) && (this.quality++);
    }
  }
}

module.exports = {
  StandardItem, Tickets,
  Item: function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
  },

  UpdateItems: update_quality = (items) => {
    for (var i = 0; i < items.length; i++) {
      if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
        items[i].sell_in = items[i].sell_in - 1;
      }
      if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (items[i].quality > 0) {
          if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
            items[i].quality = items[i].quality - 1
          }
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1;
          if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (items[i].sell_in < 11) {
              if (items[i].quality < 50) {
                items[i].quality = items[i].quality + 1;
              }
            }
            if (items[i].sell_in < 6) {
              if (items[i].quality < 50) {
                items[i].quality = items[i].quality + 1;
              }
            }
          }
        } 
      } 
      if (items[i].sell_in < 0) {
        if (items[i].name != 'Aged Brie') {
          if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (items[i].quality > 0) {
              if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
                items[i].quality = items[i].quality - 1;
              }
            }
          } else {
            items[i].quality = items[i].quality - items[i].quality;
          }
        } else {
          if (items[i].quality < 50) {
            items[i].quality = items[i].quality + 1;
          }
        }
      }
    }
  }
}