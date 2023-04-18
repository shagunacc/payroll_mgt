import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Report } from '../report';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-selected-report',
  templateUrl: './selected-report.component.html',
  styleUrls: ['./selected-report.component.css']
})
export class SelectedReportComponent implements OnInit{
  selected_month!:string;
  reports!:Report[];
  constructor(private route:ActivatedRoute,private reportservice:ReportService){

  }
  ngOnInit(): void {
    this.selected_month=this.route.snapshot.params['month'];
    console.log(this.selected_month);
    this.getselectedmonthreport();
    
    
    
  }
  getselectedmonthreport(){
    this.reportservice.getselectedreports(this.selected_month).subscribe(data=>{this.reports=data;});

  }

}
