import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostcalcRoutingModule } from './costcalc-routing.module';
import { HostComponent } from './host/host.component';

import { MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule, MatToolbarModule, MatCardModule,
  MatButtonToggleModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HostComponent],
  imports: [
    CommonModule,
    CostcalcRoutingModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule, MatToolbarModule, MatCardModule, MatButtonToggleModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class CostcalcModule { }
