import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeOffersComponent } from './change-offers.component';

describe('ChangeOffersComponent', () => {
  let component: ChangeOffersComponent;
  let fixture: ComponentFixture<ChangeOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
