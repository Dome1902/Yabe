import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOffersComponent } from './create-offers.component';

describe('CreateOffersComponent', () => {
  let component: CreateOffersComponent;
  let fixture: ComponentFixture<CreateOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
