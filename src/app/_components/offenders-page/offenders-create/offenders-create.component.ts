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
    startDate: [Validators.required, Validators.pattern('^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$')],
    endDate: [Validators.required, Validators.pattern('^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$')],
  });
  constructor(private fb: FormBuilder, private offenderService: OffenderService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.offendersForm.value);
    const form = this.offendersForm.value;
    this.offenderService.addOffender(form)
      .subscribe(
        offender => {
          console.log(offender);
        }
      );
  }
}
