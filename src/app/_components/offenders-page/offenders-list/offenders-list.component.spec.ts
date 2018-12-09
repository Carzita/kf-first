import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffendersListComponent } from './offenders-list.component';
import {OffenderService} from '../../../services/offender.service';

describe('OffendersListComponent', () => {
  let component: OffendersListComponent;
  let fixture: ComponentFixture<OffendersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffendersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffendersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

/*  it('should be using offender ID from service', () => {
    let fixture = TestBed.createComponent(OffendersListComponent);
    let app = fixture.debugElement.componentInstance;
    let offendersService = fixture.debugElement.injector.get(OffenderService);
    fixture.detectChanges();
    expect(offendersService.getAllOffenders).toEqual(app.of)
  });*/
});
