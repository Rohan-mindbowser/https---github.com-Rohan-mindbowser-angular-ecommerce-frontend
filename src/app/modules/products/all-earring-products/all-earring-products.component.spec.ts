import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEarringProductsComponent } from './all-earring-products.component';

describe('AllEarringProductsComponent', () => {
  let component: AllEarringProductsComponent;
  let fixture: ComponentFixture<AllEarringProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEarringProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEarringProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
