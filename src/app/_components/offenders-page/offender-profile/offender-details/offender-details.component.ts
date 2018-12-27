import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {Offender} from '../../../../_models/offender';
import {OffenderService} from '../../../../services/offender.service';
import {faAddressCard, faUserPlus, faHdd, faUserMinus,
  faComment, faExclamationCircle, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, Validators} from '@angular/forms';
import {OffenderComment} from '../../../../_models/offenderComment';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-offender-details',
  templateUrl: './offender-details.component.html',
  styleUrls: ['./offender-details.component.css']
})
export class OffenderDetailsComponent implements OnInit {

  singleOffender: Offender;
  errorLoading = false;
  convertedCommentArray: OffenderComment[];
  objectArray: OffenderComment[];
  noComments = false;

  // icons for sub navigation bar
  faAddressCard = faAddressCard;
  faUserPlus = faUserPlus;
  faHdd = faHdd;
  faUserMinus = faUserMinus;
  faComment = faComment;
  faExclamationCircle = faExclamationCircle;
  faCheckCircle = faCheckCircle;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private offenderService: OffenderService) {
    this.convertedCommentArray = [];
    this.objectArray = [];
  }

  commentForm = this.fb.group({
    comment: [Validators.required],
 });

   static getTimeStamp() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
    const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    return day + '-' + month + '-' + year + ' ' + hour + ':' + minutes;
  }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.singleOffender = data['offender'];
          if (this.singleOffender.comments != null) {
            this.convertedCommentArray = this.convertResponseToArray(this.singleOffender.comments);
            console.log(this.convertedCommentArray);
          } else {
            this.noComments = true;
          }
        },
        error => {
          console.log(error);
          this.errorLoading = true;
        }
      );

  }

  deleteOffender() {
    if (confirm('Er du sikker på at du vil slette: \n ' + this.singleOffender.firstName + ' ' +
      this.singleOffender.lastName + '\n DETTE KAN IKKE FORTYDES!')) {
      this.offenderService.deleteOffender(this.singleOffender.offenderID);
    }
  }

  addComment() {
    const comment = this.commentForm.get('comment').value;
    this.offenderService.addOffenderComment(comment, OffenderDetailsComponent.getTimeStamp(), this.singleOffender.offenderID)
      .subscribe(
        comments => {
          this.updateComments();
        },
        error => {
          console.log(error);
        });
  }

  updateComments() {
     this.offenderService.getAllOffenderComments(this.singleOffender.offenderID)
      .subscribe(
        comments => {
          this.objectArray = comments;
          this.convertedCommentArray = this.convertResponseToArray(this.objectArray);
          console.log(this.convertedCommentArray);
        },
        error => {
          console.log(error);
        });
  }
// converts the response object into an array
  convertResponseToArray(comments) {
    return Object.keys(comments).map((key) => comments[key]);
  }

}
