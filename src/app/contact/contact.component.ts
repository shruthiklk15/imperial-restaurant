import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Feedback } from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  feedbackForm: FormGroup;
  aftersubmitting = 'Form Submitted Successfully';
  constructor() { }

  ngOnInit(): void {
    this.feedbackFormGroupLoader();
  }

  feedbackFormGroupLoader(): void {
    this.feedbackForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required]),
      telnum: new FormControl(null, [Validators.required, Validators.pattern('^[1-9]*$')])
    });
    this.feedbackForm.setValue({
      telnum: '',
      firstname: '',
      lastname: '',
      email: '',
      message: ''
    });
  }

  reset(): void {
    this.feedbackForm.reset();
  }

  onSubmit(): void {
    const feedbackReview = new Feedback();
    feedbackReview.firstname = this.feedbackForm.value.firstname;
    feedbackReview.lastname = this.feedbackForm.value.firstname;
    feedbackReview.email = this.feedbackForm.value.email;
    feedbackReview.message = this.feedbackForm.value.message;
    feedbackReview.telnum = this.feedbackForm.value.telnum;
    this.reset();
    console.log('submitted');

  }
}


