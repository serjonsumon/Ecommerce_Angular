import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductView1Component } from './single-product-view1.component';

describe('SingleProductView1Component', () => {
  let component: SingleProductView1Component;
  let fixture: ComponentFixture<SingleProductView1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProductView1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProductView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
