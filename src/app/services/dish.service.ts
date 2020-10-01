import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Observable } from 'rxjs';
import { myBaseUniformResourceLocator } from '../shared/myBaseUniformResourceLocator';
=======
import { from, Observable } from 'rxjs';
import { myBaseURL } from '../shared/myBaseURL';
>>>>>>> 14b885770bb29a3543906d741567130c7d004272
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
<<<<<<< HEAD
    return this.http.put<Dish>(myBaseUniformResourceLocator + 'dishes', dish);
  }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(myBaseUniformResourceLocator + 'dishes')
=======
    return this.http.put<Dish>(myBaseURL + 'dishes', dish);
  }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(myBaseURL + 'dishes')
>>>>>>> 14b885770bb29a3543906d741567130c7d004272
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getDish(id: any): Observable<Dish> {
<<<<<<< HEAD
    return this.http.get<Dish>(myBaseUniformResourceLocator + 'dishes/' + id)
=======
    return this.http.get<Dish>(myBaseURL + 'dishes/' + id)
>>>>>>> 14b885770bb29a3543906d741567130c7d004272
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedDish(): Observable<Dish> {
    // alert('I am in getFeaturedDish dish service');
<<<<<<< HEAD
    return this.http.get<Dish[]>(myBaseUniformResourceLocator + 'dishes?featured=true')
=======
    return this.http.get<Dish[]>(myBaseURL + 'dishes?featured=true')
>>>>>>> 14b885770bb29a3543906d741567130c7d004272
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
<<<<<<< HEAD
    return this.http.put<Dish>(myBaseUniformResourceLocator + 'dishes/' + dish.id, dish, httpOptions)
=======
    return this.http.put<Dish>(myBaseURL + 'dishes/' + dish.id, dish, httpOptions)
>>>>>>> 14b885770bb29a3543906d741567130c7d004272
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }
}

