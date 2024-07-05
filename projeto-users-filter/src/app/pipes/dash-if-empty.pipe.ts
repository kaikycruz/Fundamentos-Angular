import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashIfEmpty',
})
export class DashIfEmptyPipe implements PipeTransform {
  transform(value: any): string | any {
    const isEmpty = value === undefined || value === null || value === '';
    return isEmpty ? '-' : value;
  }
}
