import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnOffersComponent } from './own-offers.component';

describe('OwnOffersComponent', () => {
  let component: OwnOffersComponent;
  let fixture: ComponentFixture<OwnOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
