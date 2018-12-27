import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandledEventDetailsComponent } from './handled-event-details.component';

describe('HandledEventDetailsComponent', () => {
  let component: HandledEventDetailsComponent;
  let fixture: ComponentFixture<HandledEventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandledEventDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandledEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
