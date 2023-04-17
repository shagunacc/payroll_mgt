import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{

  employee :Employee=new Employee();

  constructor(private employeeservice:EmployeeService,private router:Router){}

  ngOnInit(): void {
    
  }
  saveEmployee(){
    this.employeeservice.addEmployee(this.employee).subscribe ( data => {console.log(data);  this.gotoEmployeeList();},
    error => console.log(error)
    );
  }
  // window.alert("Employee Added Successfully");
  gotoEmployeeList(){
    this.router.navigate(["/home/employee-list"]);

  }
  onsubmit(){
    console.log(this.employee);
    this.saveEmployee();
    
  }

}
