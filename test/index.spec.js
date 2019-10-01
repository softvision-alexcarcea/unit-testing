import trader from '../src/index.js';
import authService from '../src/auth.service.js';
import priceService from '../src/price.service.js';

describe('trader', () => {
  beforeAll(() => {
    trader.lastPrice = 100;
    spyOn(priceService, 'get');
  });
  it('should display data in green when prices increase', () => {
    priceService.get.and.returnValue(101);
    trader.update();
    expect(trader.variance).toBe('rising');
  });
  it('should display data in red when prices decrease', () => {
    priceService.get.and.returnValue(99);
    trader.update();
    expect(trader.variance).toBe('falling');
  });
});

