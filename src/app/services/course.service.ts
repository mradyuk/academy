import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class CourseService {


    constructor(private http: HttpClient) {

    }

    loadCourses(url: string): Observable<any> {
        return this.http.get(url);

    }

    createHttpObservable(url) {
        return Observable.create(observer => {

            fetch(url)
                .then(response => {

                    if (response.ok) {
                        return response.json();
                    }
                    else {
                        observer.error('Request failed with status code: ' + response.status);
                    }
                })
                .then(body => {

                    observer.next(body);

                    observer.complete();

                })
                .catch(err => {

                    observer.error(err);

                });
        });
    }

}