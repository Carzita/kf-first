import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderEquipmentComponent } from './offender-equipment.component';

describe('OffenderEquipmentComponent', () => {
  let component: OffenderEquipmentComponent;
  let fixture: ComponentFixture<OffenderEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffenderEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenderEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
