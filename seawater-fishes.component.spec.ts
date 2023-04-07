import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeawaterFishesComponent } from './seawater-fishes.component';

describe('SeawaterFishesComponent', () => {
  let component: SeawaterFishesComponent;
  let fixture: ComponentFixture<SeawaterFishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeawaterFishesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeawaterFishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
