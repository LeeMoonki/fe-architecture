import Product from '../../Entities/Product';

describe('Product', () => {
  it('상품은 유저정보를', () => {
    expect(new Product()).toBeDefined();
  });
});
