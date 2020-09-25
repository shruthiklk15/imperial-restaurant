import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish' ;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Dish[];
  constructor(private dishService: DishService, private router: Router) { }

  ngOnInit(): void {
    this.dishService.getDishes()
    .subscribe(dishes => this.dishes = dishes);
  }

  routeToDetailedDish(idValue: string): void {
    this.router.navigateByUrl(`/dish-detail/${idValue}`);
  }
}
