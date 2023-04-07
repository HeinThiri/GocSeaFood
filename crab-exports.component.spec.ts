import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrabExportsComponent } from './crab-exports.component';

describe('CrabExportsComponent', () => {
  let component: CrabExportsComponent;
  let fixture: ComponentFixture<CrabExportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrabExportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrabExportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
