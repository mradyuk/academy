import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { filter, concatMap, map } from 'rxjs/operators';
//import 'rxjs/add/observable/from';
import { Course } from '../model/classes';



@Injectable()
export class CourseService {


    constructor(private http: HttpClient) {

    }

    loadCourses(url: string): Observable<any> {
        return this.http.get(url);

    }

    loadCourseById(url: string, courseId: string): Observable<any> {

        return this.http.get(url)
            /*   .pipe(
                   filter((ev: Course) =>
                       ev.id === courseId
                   )
               );*/
            .pipe(
                map((courses: Course[]) => courses.filter(course => course.id === courseId)[0])
            );

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