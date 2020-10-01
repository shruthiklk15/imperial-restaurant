import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DishService } from '../services/dish.service';
import { Comment } from '../shared/comment';
import { Dish } from '../shared/dish';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  dish: Dish;
  dishIds: string[];
  comment: Comment;
  commentForm: FormGroup;
  rating3: number;
  public form: FormGroup;
  dishdetailForm: FormGroup;
  dishcopy: Dish;
  errMess: string;



  constructor(private dishservice: DishService, private route: ActivatedRoute, private location: Location, private fb: FormBuilder ) {
    this.form = this.fb.group({
      rating1: ['5', Validators.required],
    });
   }

  ngOnInit(): void {
    this.commentFormSetup();
    const id = this.route.snapshot.paramMap.get('id');
    this.getDishOnId(id);
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
  }


  commentFormSetup(): void {
    this.commentForm = new FormGroup({
      rating: new FormControl(null, [Validators.required, Validators.pattern('^[1-5]*$'),
      Validators.minLength(1)]),
      comment: new FormControl(null, [Validators.required]),
      author: new FormControl(null, [Validators.required])
<<<<<<< HEAD
=======
      // date: new FormControl(null, [Validators.required])
>>>>>>> 14b885770bb29a3543906d741567130c7d004272
    });
    this.commentForm.setValue({
      rating: 5,
      comment: '',
      author: ''
    });
  }


  private getDishOnId(id: string): void {
    this.dishservice.getDish(id).subscribe(data => {
      this.dish = data;
    });
  }
  goBack(): void {
    this.location.back();
  }

  getPreviousDish(): void {
    let previousIndexNumber = this.dishIds.indexOf(this.dish.id) - 1;
    if (previousIndexNumber <= 0) { } {
      previousIndexNumber = this.dishIds.length - 1;
    }
    this.getDishOnId(this.dishIds[previousIndexNumber]);
    // let last: any = this.dish[
    // console.log(last.id);
  }
  getNextDish(): void {
    let nextIndexNumber = this.dishIds.indexOf(this.dish.id) + 1;
    if (nextIndexNumber >= this.dishIds.length) {
      nextIndexNumber = 0;
    }
    this.getDishOnId(this.dishIds[nextIndexNumber]);
  }
  onSubmit(): void {
    const dishReview = new Comment();
    dishReview.rating = this.commentForm.value.rating;
    dishReview.comment = this.commentForm.value.comment;
    dishReview.author = this.commentForm.value.author;
    dishReview.date = new Date().toString();
    this.dish.comments.push(dishReview);
    this.dishservice.updateDishDetails(this.dish).subscribe(updateDish => this.dish = updateDish);
    this.reset();
  }

  reset(): void {
    this.commentForm.reset();
  }
}


