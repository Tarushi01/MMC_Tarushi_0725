import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deleteproducts } from './deleteproducts';

describe('Deleteproducts', () => {
  let component: Deleteproducts;
  let fixture: ComponentFixture<Deleteproducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deleteproducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deleteproducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
