import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updateproducts } from './updateproducts';

describe('Updateproducts', () => {
  let component: Updateproducts;
  let fixture: ComponentFixture<Updateproducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updateproducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updateproducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
