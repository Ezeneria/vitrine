import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {headersToString} from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private http: HttpClient) {}
  body = { data: ''};
  getCourses() {
  return this.http.post('http://krapipl.imumk.ru:8082/api/mobilev1/update', this.body);
  }
}
