import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { myBaseUniformResourceLocator } from '../shared/myBaseUniformResourceLocator';
=======
import { myBaseURL } from '../shared/myBaseURL';
>>>>>>> 14b885770bb29a3543906d741567130c7d004272
import { map, catchError } from 'rxjs/operators';
import { ProcessHttpmsgService } from './process-httpmsg.service';

@Injectable({
    providedIn: 'root'
})
export class PromotionService {

    constructor(private http: HttpClient, private processHTTPMsgService: ProcessHttpmsgService) { }
    getPromotions(): Observable<Promotion[]> {
        // return of(PROMOTIONS).pipe(delay(2000));

<<<<<<< HEAD
        return this.http.get<Promotion[]>(myBaseUniformResourceLocator + 'promotions')
=======
        return this.http.get<Promotion[]>(myBaseURL + 'promotions')
>>>>>>> 14b885770bb29a3543906d741567130c7d004272
            .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    getPromotion(id: any): Observable<Promotion> {
        // return new Promise(resolve=> {
        //   // Simulate server latency with 2 second delay
        //     setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.id == id))[0]), 2000);
        // });
        // return of(PROMOTIONS.filter((promo) => (promo.id == id))[0]).pipe(delay(2000));
<<<<<<< HEAD
        return this.http.get<Promotion>(myBaseUniformResourceLocator + 'promotions/' + id)
=======
        return this.http.get<Promotion>(myBaseURL + 'promotions/' + id)
>>>>>>> 14b885770bb29a3543906d741567130c7d004272
            .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    getFeaturedPromotion(): Observable<Promotion> {
        //  return new Promise(resolve=> {
        //   // Simulate server latency with 2 second delay
        //     setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.featured))[0]), 2000);
        // });

        // return of(PROMOTIONS.filter((promo) => (promo.featured))[0]).pipe(delay(2000));
<<<<<<< HEAD
        return this.http.get<Promotion[]>(myBaseUniformResourceLocator + 'promotions?featured=true')
=======
        return this.http.get<Promotion[]>(myBaseURL + 'promotions?featured=true')
>>>>>>> 14b885770bb29a3543906d741567130c7d004272
            .pipe(map(dishes => dishes[0]))
            .pipe(catchError(this.processHTTPMsgService.handleError));
    }
}
