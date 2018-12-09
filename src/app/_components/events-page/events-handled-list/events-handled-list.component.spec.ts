import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsHandledListComponent } from './events-handled-list.component';

describe('EventsHandledListComponent', () => {
  let component: EventsHandledListComponent;
  let fixture: ComponentFixture<EventsHandledListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsHandledListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsHandledListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
