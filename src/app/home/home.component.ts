import { Component, Inject, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { DishService } from '../services/dish.service';
import { LeaderService } from '../services/leader.service';
import { PromotionService } from '../services/promotion';
import { Dish } from '../shared/dish';
import { Leader } from '../shared/leader';
import { Promotion } from '../shared/promotion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dishservice: DishService, private promotionservice: PromotionService,
              private leaderService: LeaderService) { }

  // static veg = 'VEGITABLES';
  dish: Dish;
  dishErrMess: string;
  promotionErrMess: string;
  featureLeadersErrMess: string;
  promotion: Promotion;
  featureLeaders: Leader;


  ngOnInit(): void {
    // HomeComponent.veg = 'abc';
    // const object = new HomeComponent();
    // object.dish = null;
    // alert('I am in init hom');
    this.dishservice.getFeaturedDish().subscribe(d => this.dish = d, errmess => this.dishErrMess = 'Error in fetching data');
    this.promotionservice.getFeaturedPromotion().subscribe(promotion =>
    this.promotion = promotion, errmess => this.promotionErrMess = (errmess as any));
    this.leaderService.getFeaturedLeader().subscribe(featureLeaders =>
    this.featureLeaders = featureLeaders, errmess => this.featureLeadersErrMess = (errmess as any));
  }
}

