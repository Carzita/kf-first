import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderEventsComponent } from './offender-events.component';

describe('OffenderEventsComponent', () => {
  let component: OffenderEventsComponent;
  let fixture: ComponentFixture<OffenderEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffenderEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenderEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
