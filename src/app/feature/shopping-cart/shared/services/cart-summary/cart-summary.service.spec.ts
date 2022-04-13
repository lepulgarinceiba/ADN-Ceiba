import { TestBed } from '@angular/core/testing';
import { Product } from '@shared/interfaces/products-interface';

import { CartSummaryService } from './cart-summary.service';

describe('CartSummaryService', () => {
  let service: CartSummaryService;
  const productsOnCart: Product[] = [
    {
      id: 1,
      description: 'Producto 1',
      price: 40000,
      type: 'electronics' as const,
      image: 'image',
      buyQuantity: 1,
    },
    {
      id: 2,
      description: 'Producto 2',
      price: 50000,
      type: 'electronics' as const,
      image: 'image',
      buyQuantity: 2,
    },
  ];
  const product: Product = {
    id: 1,
    description: 'Producto 3',
    price: 40000,
    type: 'electronics' as const,
    image: 'image',
    buyQuantity: 1,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartSummaryService],
    });
    service = TestBed.inject(CartSummaryService);
    service._todayDate = new Date('2022/04/11');
    service.calculateShippingPricesAndDiscounts(false);
  });

  it('should be created cart summary service', () => {
    expect(service).toBeTruthy();
  });

  it('should return total price of products, normal shipping price and without discount', () => {
    service.calculateSubTotalPrice(productsOnCart);
    expect(service.getPrices().subTotalPrice).toEqual(140000);
    expect(service.getPrices().shippingPrice).toEqual(4000);
    expect(service.getPrices().discount).toEqual(0);
  });

  it('should return total price of products, plus shipping price and without discount', () => {
    const productsOnCartCopy = [...productsOnCart];
    productsOnCartCopy.push(product);
    service.calculateSubTotalPrice(productsOnCartCopy);
    service.calculateShippingPricesAndDiscounts(true);
    expect(service.getPrices().subTotalPrice).toEqual(180000);
    expect(service.getPrices().shippingPrice).toEqual(7000);
    expect(service.getPrices().discount).toEqual(0);
  });

  it('should return discount and shipping be free in last days of month', () => {
    const productsOnCartCopy = [...productsOnCart];
    productsOnCartCopy.push(product);
    service._todayDate = new Date('2022/04/29');
    service.calculateSubTotalPrice(productsOnCartCopy);
    service.calculateShippingPricesAndDiscounts(false);
    expect(service.getPrices().subTotalPrice).toEqual(180000);
    expect(service.getPrices().shippingPrice).toEqual(0);
    expect(service.getPrices().discount).toEqual(18000);
  });

  it('should get the third business day after ', () => {
    const date = new Date('2022/04/11');
    const thirdBusinessDay = new Date('2022/04/18');
    expect(service.calculateShippingDates(date)).toEqual(thirdBusinessDay);
  });

  it('should return the shipping dates', () => {
    service.calculateAllShippingDates();
    const shippingDates = service.getShippingDates();
    shippingDates.shippingStartDate.setHours(0, 0, 0, 0);
    shippingDates.shippingEndDate.setHours(0, 0, 0, 0);
    shippingDates.minShippingDate.setHours(0, 0, 0, 0);
    expect(shippingDates).toEqual({
      shippingStartDate: new Date('2022/04/18'),
      shippingEndDate: new Date('2022/04/21'),
      minShippingDate: new Date('2022/04/18'),
    });
  });
});
