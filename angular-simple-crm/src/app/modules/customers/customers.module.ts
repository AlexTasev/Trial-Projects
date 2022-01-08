import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { CustomerSetupComponent } from './pages/customer-setup/customer-setup.component';
import { CustomersRoutingModule } from './customers.-routing.module';

@NgModule({
  declarations: [CustomerListComponent, CustomerSetupComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
