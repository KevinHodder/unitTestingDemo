const {orderTotal} = require('../src/orderTotal');

describe('OrderTotal function', () => {
  describe('GIVEN a list of items with prices', () => {
    it('THEN Return the total value', () => {
      const items = [
        { name: 'unicorn food', price: 35 },
        { name: 'unicorn bridle', price: 70 }
      ]
      expect(orderTotal(items)).toEqual(105)
    })
  })
})
