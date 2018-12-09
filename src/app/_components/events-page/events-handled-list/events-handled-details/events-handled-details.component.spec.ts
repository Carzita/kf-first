import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsHandledDetailsComponent } from './events-handled-details.component';

describe('EventsHandledDetailsComponent', () => {
  let component: EventsHandledDetailsComponent;
  let fixture: ComponentFixture<EventsHandledDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsHandledDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsHandledDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
