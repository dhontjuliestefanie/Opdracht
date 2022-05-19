import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/model/customer.model';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  gefilterdeKlanten: Customer[];
  totaal: number = 0;
  euroteken: string;

  private _customers: Customer[] = [];
  @Input() get customers(): Customer[] {
    return this._customers;
  }

  set customers(value: Customer[]) {
    if (value) {
      this.gefilterdeKlanten = this._customers = value;
      this.berekenTotaal();
    }
  }

  constructor() {
  }

  ngOnInit() {
    this.gefilterdeKlanten = [];
    this.totaal = 0;
    this.euroteken = "€";
  }

  filteren(naamKlant: string) {
    if (naamKlant == null || naamKlant.length == 0) {
      this.gefilterdeKlanten = this._customers;
    }
    else {
      this.gefilterdeKlanten = this._customers
        .filter(k => k.name == naamKlant);
    }
    this.berekenTotaal();

  }

  berekenTotaal() {
    this.totaal = 0;
    this.gefilterdeKlanten.forEach(k => this.totaal += k.orderTotaal)
  }
}