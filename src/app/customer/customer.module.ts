import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './filter-textbox/filter-textbox.component';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    FilterTextboxComponent
  ],
  imports: [
    CommonModule, CoreModule, FormsModule
  ],
  exports: [CustomersComponent]
})
export class CustomerModule { }
