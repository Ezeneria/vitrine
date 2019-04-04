import {Component, DoCheck, OnInit} from '@angular/core';
import {CoursesService} from '../../services/courses.service';

@Component({
  selector: 'fiz-shop-window',
  templateUrl: './shop-window.component.html',
  styleUrls: ['./shop-window.component.scss']
})
export class ShopWindowComponent implements OnInit {

  constructor(private courseService: CoursesService) {}
  searchInput: string;
  listOfCourse;
  selectFilter = {
    subject: [
      {value: 'all', viewValue: 'Все предметы'},
      {value: '0', viewValue: 'Алгебра'},
      {value: '1', viewValue: 'Окружающий мир'},
      {value: '2', viewValue: 'Информатика'}
    ],
    genre: [
      {value: 'all', viewValue: 'Все жанры'},
      {value: '0', viewValue: 'Демо'},
      {value: '1', viewValue: 'Рабочая тетрадь'},
      {value: '2', viewValue: 'Задачник'}
    ],
    grade: [
      {value: 'all', viewValue: 'Все классы'},
      {value: '1', viewValue: '1'},
      {value: '2', viewValue: '2'},
      {value: '3', viewValue: '3'},
      {value: '4', viewValue: '4'},
      {value: '5', viewValue: '5'},
      {value: '6', viewValue: '6'},
      {value: '7', viewValue: '7'},
      {value: '8', viewValue: '8'},
      {value: '9', viewValue: '9'}
    ],
  }
  subjectSelected = this.selectFilter.subject[0].viewValue;
  genreSelected = this.selectFilter.genre[0].viewValue;
  gradeSelected = this.selectFilter.grade[0].viewValue;

  ngOnInit() {
    this.courseService.getCourses().subscribe(response => {
      this.listOfCourse = response;
    });
  }

}
