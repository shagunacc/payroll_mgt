import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
// import { AddReportDialogComponent } from '../add-report-dialog/add-report-dialog.component';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-salary-reports',
  templateUrl: './salary-reports.component.html',
  styleUrls: ['./salary-reports.component.css']
})
export class SalaryReportsComponent implements OnInit{
  suppliers!:Supplier[];

  constructor(private supplierService:SupplierService,private router:Router){

  }

  ngOnInit(): void {
    this.getSuppliers();
    
  }

  updateReport(id:number){
    this.router.navigate(['home/update-report',id]);

  }

  // openDialog(){
  //   this.matDialog.open(AddReportDialogComponent,{
  //     width:'600px'
  //   })

  
  private getSuppliers(){
    this.supplierService.getSuppliersList().subscribe(data=>{this.suppliers=data;});
  }
  deleteReport(id:number){
    this.supplierService.deleteReport(id).subscribe(data=>{
      this.getSuppliers();
    })

  }


}
