import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBraceletProductsComponent } from './all-bracelet-products.component';

describe('AllBraceletProductsComponent', () => {
  let component: AllBraceletProductsComponent;
  let fixture: ComponentFixture<AllBraceletProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBraceletProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBraceletProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
