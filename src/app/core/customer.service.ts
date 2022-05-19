import { Injectable } from '@angular/core';
import { Customer } from '../shared/model/customer.model';
import { HttpClient} from '@angular/common/http';
import { tap } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  getCustomers() : Observable<Customer[]> {
    return this.http
    .get<Customer[]>('../assets/data/customers.json')
    .pipe(tap(result => console.log('opgehaald via de service: ' + result)));
  }

}
