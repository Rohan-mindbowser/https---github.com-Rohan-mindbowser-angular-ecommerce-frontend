import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRingsProductsComponent } from './all-rings-products.component';

describe('AllRingsProductsComponent', () => {
  let component: AllRingsProductsComponent;
  let fixture: ComponentFixture<AllRingsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRingsProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRingsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
