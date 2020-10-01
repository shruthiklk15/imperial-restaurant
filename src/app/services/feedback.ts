import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
<<<<<<< HEAD
import { myBaseUniformResourceLocator } from '../shared/myBaseUniformResourceLocator';
=======
import { myBaseURL } from '../shared/myBaseUrl';
>>>>>>> 14b885770bb29a3543906d741567130c7d004272
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
<<<<<<< HEAD
        return this.http.post<Feedback>(myBaseUniformResourceLocator + 'feedback/', feedback, httpOptions)
=======
        return this.http.post<Feedback>(myBaseURL + 'feedback/', feedback, httpOptions)
>>>>>>> 14b885770bb29a3543906d741567130c7d004272
            .pipe(catchError(this.processHTTPMsgService.handleError));
    }

}
