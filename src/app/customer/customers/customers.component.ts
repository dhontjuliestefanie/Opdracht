import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/core/customer.service';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/shared/model/customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers$: Observable<Customer[]>;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customers$ = this.customerService.getCustomers();
  }
}
