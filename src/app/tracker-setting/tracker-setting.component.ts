import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

// Data
import { timezones } from '../../data/timezones';

@Component({
  selector: 'app-tracker-setting',
  templateUrl: './tracker-setting.component.html',
  styleUrls: ['./tracker-setting.component.scss']
})
export class TrackerSettingComponent implements OnInit {
  timezone = new FormControl();
  timezones = timezones;
  filteredOptions!: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.timezone.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    console.log(filterValue);
    return this.timezones.filter(timezone => timezone.label.toLowerCase().includes(filterValue));
  }
}
