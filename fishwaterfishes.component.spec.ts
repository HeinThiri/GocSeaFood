import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishwaterfishesComponent } from './fishwaterfishes.component';

describe('FishwaterfishesComponent', () => {
  let component: FishwaterfishesComponent;
  let fixture: ComponentFixture<FishwaterfishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishwaterfishesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FishwaterfishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
