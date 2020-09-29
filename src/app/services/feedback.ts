import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { myBaseUniformResourceLocator } from '../shared/myBaseUniformResourceLocator';
import { map, catchError } from 'rxjs/operators';
import { ProcessHttpmsgService } from './process-httpmsg.service';

@Injectable({
    providedIn: 'root'
})
export class FeedbackService {
    feedback: Feedback;
    constructor(private http: HttpClient, private processHTTPMsgService: ProcessHttpmsgService) { }

    submitFeedback(feedback: Feedback): Observable<Feedback> {
        console.log(feedback) ;
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post<Feedback>(myBaseUniformResourceLocator + 'feedback/', feedback, httpOptions)
            .pipe(catchError(this.processHTTPMsgService.handleError));
    }

}
