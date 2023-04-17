import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit{

  supplier:Supplier=new Supplier();
  employees!:Employee[];

  constructor(private supplierservice:SupplierService,private router:Router,private employeeService:EmployeeService){}

  ngOnInit(): void {
    this.employeeService.getEmployeesList().subscribe(
      data =>{this.employees=data}

    )
    
  }
  setName(employee: Employee){
    this.supplier.name = employee.name;
  }
  
  saveReport(){
    this.supplierservice.addSalaryReports(this.supplier).subscribe ( data => {console.log(data);this.gotoSalaryReports();},
    error => console.log(error)
    );
  }
  gotoSalaryReports(){
    this.router.navigate(["/home/salary-reports"]);

  }
  onsubmit(){
    console.log(this.supplier);
    this.saveReport();

  }


}
