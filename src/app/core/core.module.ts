import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // zelf toevoegen

import { CustomerService } from './customer.service';

@NgModule({
  
  imports:  [HttpClientModule ],
  providers: [CustomerService]
})

export class CoreModule { }
