import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSeaFoodExportsComponent } from './other-sea-food-exports.component';

describe('OtherSeaFoodExportsComponent', () => {
  let component: OtherSeaFoodExportsComponent;
  let fixture: ComponentFixture<OtherSeaFoodExportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherSeaFoodExportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherSeaFoodExportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
