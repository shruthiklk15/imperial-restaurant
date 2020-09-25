import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';
import { map, catchError, delay } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { myBaseURL } from '../shared/myBaseURL';
import { ProcessHttpmsgService } from './process-httpmsg.service' ;

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHttpmsgService) { }
  getLeaders(): Observable<Leader[]> {
  // return of(LEADERS).pipe(delay(2000));
  return this.http.get<Leader[]>(myBaseURL + 'leadership');
    // .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  getLeader(id: any): Observable<Leader> {
    // return new Promise(resolve=> {
    //   // Simulate server latency with 2 second delay
    //     setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id == id))[0]), 2000);
    // });
    // return of(LEADERS.filter((leader) => (leader.id === id))[0]).pipe(delay(2000));
    return this.http.get<Leader>(myBaseURL + 'leadership/' + id);
    // .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedLeader(): Observable<Leader> {
  //  return new Promise(resolve =>{
  //    // Simulate server latency with 2 second delay
  //    setTimeout(()=> resolve(LEADERS.filter((leader) => leader.featured)[0]),2000);
  //  });

  // return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000));

    return this.http.get<Leader>(myBaseURL + 'leadership?featured=true')
    .pipe(map(leadership => leadership[0]));
    // .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}

