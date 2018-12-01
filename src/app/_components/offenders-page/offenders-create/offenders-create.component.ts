import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {OffenderService} from '../../../services/offender.service';

@Component({
  selector: 'app-offenders-create',
  templateUrl: './offenders-create.component.html',
  styleUrls: ['./offenders-create.component.css']
})
export class OffendersCreateComponent implements OnInit {
  @Input() pattern: string | RegExp;

  offendersForm = this.fb.group({
    cpr: [Validators.required, Validators.pattern('[0-3][0-9][0-1][1-9]\\d{2}-\\d{4}?[^0-9]*')],
    firstName: [Validators.required],
    middleName: [Validators],
    lastName: [Validators.required],
    city: [Validators.required],
    address: [Validators.required],
    zip: [Validators.required],
  });
  constructor(private fb: FormBuilder, private offenderSerivce: OffenderService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.offendersForm.value);
    const value = this.offendersForm.value;
    this.offenderSerivce.addOffender(value)
      .subscribe(
        offender => {
          console.log(offender);
        }
      );
  }
}
