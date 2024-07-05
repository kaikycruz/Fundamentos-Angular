import { Component } from '@angular/core';
import { IFilterOption } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  filterOptions: IFilterOption = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: '',
  };
  dateSelected(date: any) {
    console.log(date);
  }
}
