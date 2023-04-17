import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveRecordsComponent } from './leave-records/leave-records.component';



@NgModule({
  declarations: [
    LeaveRecordsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LeaveRecordsComponent
  ]
})
export class LeaveModule { }
