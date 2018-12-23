import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderHandledEventsComponent } from './offender-handled-events.component';

describe('OffenderHandledEventsComponent', () => {
  let component: OffenderHandledEventsComponent;
  let fixture: ComponentFixture<OffenderHandledEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffenderHandledEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenderHandledEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
