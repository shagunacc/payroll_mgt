import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from '../report';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-monthly-reports',
  templateUrl: './monthly-reports.component.html',
  styleUrls: ['./monthly-reports.component.css']
})
export class MonthlyReportsComponent implements OnInit{

  
  reports!:Report[]; 
  selected_month!:string;
  constructor(private reportservice:ReportService,private router:Router){}

  ngOnInit(): void {
    this.getmonthlyreports();
  
  }
  getmonthlyreports(){
    this.reportservice.getMonthlyReports().subscribe(data=>{this.reports=data;});
  }
  show(){
    console.log(this.selected_month);
    this.router.navigate(['home/selected-reports',this.selected_month]);
  }

  

}
