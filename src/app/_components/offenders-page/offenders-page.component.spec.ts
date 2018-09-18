import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffendersPageComponent } from './offenders-page.component';

describe('OffendersPageComponent', () => {
  let component: OffendersPageComponent;
  let fixture: ComponentFixture<OffendersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffendersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffendersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
