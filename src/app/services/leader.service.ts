import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
<<<<<<< HEAD
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { myBaseUniformResourceLocator } from '../shared/myBaseUniformResourceLocator';
=======
import {LEADERS} from '../shared/leaders';
import { map, catchError, delay } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { myBaseURL } from '../shared/myBaseURL';
>>>>>>> 14b885770bb29a3543906d741567130c7d004272
import { ProcessHttpmsgService } from './process-httpmsg.service' ;

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHttpmsgService) { }
  getLeaders(): Observable<Leader[]> {
  // return of(LEADERS).pipe(delay(2000));
<<<<<<< HEAD
  return this.http.get<Leader[]>(myBaseUniformResourceLocator + 'leadership');
=======
  return this.http.get<Leader[]>(myBaseURL + 'leadership');
>>>>>>> 14b885770bb29a3543906d741567130c7d004272
    // .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  getLeader(id: any): Observable<Leader> {
    // return new Promise(resolve=> {
    //   // Simulate server latency with 2 second delay
    //     setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id == id))[0]), 2000);
    // });
    // return of(LEADERS.filter((leader) => (leader.id === id))[0]).pipe(delay(2000));
<<<<<<< HEAD
    return this.http.get<Leader>(myBaseUniformResourceLocator + 'leadership/' + id);
=======
    return this.http.get<Leader>(myBaseURL + 'leadership/' + id);
>>>>>>> 14b885770bb29a3543906d741567130c7d004272
    // .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedLeader(): Observable<Leader> {
  //  return new Promise(resolve =>{
  //    // Simulate server latency with 2 second delay
  //    setTimeout(()=> resolve(LEADERS.filter((leader) => leader.featured)[0]),2000);
  //  });

  // return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000));

<<<<<<< HEAD
    return this.http.get<Leader>(myBaseUniformResourceLocator + 'leadership?featured=true')
=======
    return this.http.get<Leader>(myBaseURL + 'leadership?featured=true')
>>>>>>> 14b885770bb29a3543906d741567130c7d004272
    .pipe(map(leadership => leadership[0]));
    // .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}

