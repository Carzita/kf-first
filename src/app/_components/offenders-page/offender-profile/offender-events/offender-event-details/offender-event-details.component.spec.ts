import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderEventDetailsComponent } from './offender-event-details.component';

describe('OffenderEventDetailsComponent', () => {
  let component: OffenderEventDetailsComponent;
  let fixture: ComponentFixture<OffenderEventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffenderEventDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenderEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
