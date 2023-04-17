import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
// import { MatDialog } from '@angular/material/dialog';
// import { UpdateEmployeeDialogComponent } from '../update-employee-dialog/update-employee-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees!:Employee[];

  constructor(private employeeService:EmployeeService,private router:Router){}

  ngOnInit(): void {
    this.getEmployees();
  
    
  }

  updateEmployee(id:number){
    this.router.navigate(['home/update-employee',id]);

  }
  // openDialog(){
  //   this.matDialog.open(UpdateEmployeeDialogComponent,{
  //     width:'700px'
  //   })
  // }


  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data=>{this.employees=data;});
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      this.getEmployees();
    })
  }

}
