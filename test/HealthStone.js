const {HealthStone} = require('../app/items');
const expect = require('chai').expect;

describe('#Healthstone', () => {
  context('(10,20) regular', () => {
    let Default = new HealthStone('Lock rocks', 10, 20);
    Default.UpdateItem();
    it('should have quality 23', () => {
    expect(Default.quality).to.equal(23);
    });
  });
  context('(10,49) max quality', () => {
    let Default = new HealthStone('Lock rocks', 10, 49);
    Default.UpdateItem();
    it('should have quality 50', () => {
    expect(Default.quality).to.equal(50);
    });
  });
});