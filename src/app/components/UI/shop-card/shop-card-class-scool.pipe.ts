import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'shopCardClassScool'
})
export class ShopCardClassScoolPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    const massive = value.split(';');
    if (massive.length > 1) {
      const result = massive[0] + '-' + massive[massive.length - 1] + ' ' + 'классы';
      return result;
    }
    return value + ' ' + 'класс';
  }
}
