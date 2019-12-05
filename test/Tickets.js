<<<<<<< HEAD
const {Tickets} = require('../app/gilded_rose');
=======
const {Tickets} = require('../app/items');
>>>>>>> now OOP version without conjured
const expect = require('chai').expect;

describe('#TAFKAL80ETC', () => {    
    context('(15, 20) - Normal', () => {
      let Default = new Tickets('Backstage passes to a TAFKAL80ETC concert', 15, 20);
      Default.UpdateItem();
      it('should have quality 21', () => {
        expect(Default.quality).to.equal(21);
      });
    });
    // Has its own quality system
    context('(15,50) - Dont pass 50 quality', () => {
      let MaxQuality = new Tickets('Backstage passes to a TAFKAL80ETC concert', 15, 50);
      MaxQuality.UpdateItem();
      it('should have quality 50', () => {
        expect(MaxQuality.quality).to.equal(50);
      });
    });
    context('(11,0) - quality +2 when day <= 10', () => {
      let QualityPlusTwo = new Tickets('Backstage passes to a TAFKAL80ETC concert', 11, 0);
      QualityPlusTwo.UpdateItem();
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> now OOP version without conjured
      it('should have sell_in 10', () => {
        expect(QualityPlusTwo.sell_in).to.equal(10);
      });
=======
>>>>>>>  updated tests for no duplication on testing sell_in
      it('should have quality 2', () => {
        expect(QualityPlusTwo.quality).to.equal(2);
      });
    });
    context('(6,0) - quality +3 when day <= 5', () => {
      let QualityPlusThree = new Tickets('Backstage passes to a TAFKAL80ETC concert', 6, 0);
      QualityPlusThree.UpdateItem();
      it('should have quality 3', () => {
        expect(QualityPlusThree.quality).to.equal(3);
      });
    });
    // Date Passes 
    context('(0,40) - past concert ', () => {
      let PastSellDate = new Tickets('Backstage passes to a TAFKAL80ETC concert', 0, 40);
      PastSellDate.UpdateItem();
      it('should have quality 0', () => {
        expect(PastSellDate.quality).to.equal(0);
      });
    });
  }); 