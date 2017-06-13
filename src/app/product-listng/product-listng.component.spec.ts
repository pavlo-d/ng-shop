import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListngComponent } from './product-listng.component';

describe('ProductListngComponent', () => {
  let component: ProductListngComponent;
  let fixture: ComponentFixture<ProductListngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
