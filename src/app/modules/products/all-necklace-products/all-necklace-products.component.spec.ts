import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNecklaceProductsComponent } from './all-necklace-products.component';

describe('AllNecklaceProductsComponent', () => {
  let component: AllNecklaceProductsComponent;
  let fixture: ComponentFixture<AllNecklaceProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllNecklaceProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllNecklaceProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
