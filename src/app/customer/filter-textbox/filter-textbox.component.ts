import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filter-textbox',
  templateUrl: './filter-textbox.component.html',
  styleUrls: ['./filter-textbox.component.css']
})
export class FilterTextboxComponent implements OnInit {

  filter: string;
  @Output() naamKlant = new EventEmitter<string>();

  filteren(value: string) {
    this.filter = value;
    this.naamKlant.emit(this.filter);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
