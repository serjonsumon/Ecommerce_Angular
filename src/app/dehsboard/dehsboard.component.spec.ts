import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DehsboardComponent } from './dehsboard.component';

describe('DehsboardComponent', () => {
  let component: DehsboardComponent;
  let fixture: ComponentFixture<DehsboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DehsboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DehsboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
