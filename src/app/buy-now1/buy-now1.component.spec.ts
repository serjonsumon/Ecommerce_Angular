import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyNow1Component } from './buy-now1.component';

describe('BuyNow1Component', () => {
  let component: BuyNow1Component;
  let fixture: ComponentFixture<BuyNow1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyNow1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyNow1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
