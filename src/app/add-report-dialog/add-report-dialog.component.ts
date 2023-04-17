import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-add-report-dialog',
  templateUrl: './add-report-dialog.component.html',
  styleUrls: ['./add-report-dialog.component.css']
})
export class AddReportDialogComponent implements OnInit{
  id!:number;
  salary:Supplier=new Supplier;

  constructor(private supplierService:SupplierService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.supplierService.getEmployeeById(this.id).subscribe(data => {
      this.salary = data;
      // console.log("data = "+data);
      
    }, error => console.log(error));

    
  }
  onsubmit(){
    this.supplierService.updateReport(this.id, this.salary).subscribe( data =>{
      this.goToSalaryList();
    }
    , error => console.log(error));
    


  }
  goToSalaryList(){
    this.router.navigate(["/home/salary-reports"]);
  }
  


}
