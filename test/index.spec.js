describe('trader', () => {
  beforeAll(() => {
    trader.lastPrice = 100;
    spyOn(priceService, 'get');
  });
  it('should display data in green when prices increase', () => {
    priceService.get.and.returnValue(101);
    expect(trader.render()).toBe('green');
  });
  it('should display data in red when prices decrease', () => {
    priceService.get.and.returnValue(99);
    expect(trader.render()).toBe('red');
  });
});

