import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffenderHandledEventDetailComponent } from './offender-handled-event-detail.component';

describe('OffenderHandledEventDetailComponent', () => {
  let component: OffenderHandledEventDetailComponent;
  let fixture: ComponentFixture<OffenderHandledEventDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffenderHandledEventDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffenderHandledEventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
