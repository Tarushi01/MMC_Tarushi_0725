import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPortfolio } from './stock-portfolio';

describe('StockPortfolio', () => {
  let component: StockPortfolio;
  let fixture: ComponentFixture<StockPortfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockPortfolio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockPortfolio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
