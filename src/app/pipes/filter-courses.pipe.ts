import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterCourses'
})
export class FilterCoursesPipe implements PipeTransform {

  transform(items: [any], subject: string, genre: string, grade: string, searchField: string): any {
    if (items && items.length) {
      return items.filter(item => {
        if ((subject !== 'Все предметы' && item.subject !== subject)) {
          return false;
        }
        if ((genre !== 'Все жанры' && item.genre !== genre)) {
          return false;
        }
        if ((grade !== 'Все классы' && item.grade !== grade)) {
          return false;
        }
        if ((searchField && item.subject.toLowerCase().indexOf(searchField.toLowerCase()) === -1)) {
          return false;
        }
        return true;
      });

    } else {
      return items;
    }
  }
}
