import { TestBed } from '@angular/core/testing';


import { PlaceOrderService } from './placeOrder.service';

describe('PlaceOrderService', () => {
  let service: PlaceOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
