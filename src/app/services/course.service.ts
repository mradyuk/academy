import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { filter, concatMap, map } from 'rxjs/operators';
//import 'rxjs/add/observable/from';
import { Course } from '../model/classes';



@Injectable()
export class CourseService {


    private subject = new BehaviorSubject<Course[]>([]);
    courses$: Observable<Course[]> = this.subject.asObservable();


    constructor(private http: HttpClient) {

    }

    init() {

        this.http.get('./assets/courses.json').subscribe(
            (courses: Course[]) => this.subject.next(courses)
        );
    }

    getCourseContent(courseId: string) {
        return this.courses$.pipe(
            map((courses: Course[]) => courses.find(course => course.id === courseId)),
            filter(course => !!course)
        );
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