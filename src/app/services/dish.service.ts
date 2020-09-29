import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { myBaseUniformResourceLocator } from '../shared/myBaseUniformResourceLocator';
import { Dish } from '../shared/dish';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ProcessHttpmsgService } from './process-httpmsg.service';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHttpmsgService) { }

  updateDishDetails(dish: Dish): Observable<Dish> {
    return this.http.put<Dish>(myBaseUniformResourceLocator + 'dishes', dish);
  }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(myBaseUniformResourceLocator + 'dishes')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getDish(id: any): Observable<Dish> {
    return this.http.get<Dish>(myBaseUniformResourceLocator + 'dishes/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedDish(): Observable<Dish> {
    // alert('I am in getFeaturedDish dish service');
    return this.http.get<Dish[]>(myBaseUniformResourceLocator + 'dishes?featured=true')
      .pipe(map(dishes => dishes[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getDishIds(): Observable<number[] | any> {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)))
      .pipe(catchError(error => error));
  }

  putDish(dish: Dish): Observable<Dish> {
    // console.log(dish.comments)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<Dish>(myBaseUniformResourceLocator + 'dishes/' + dish.id, dish, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }
}

