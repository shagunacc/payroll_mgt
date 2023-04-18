import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from './report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private baseurl="http://localhost:8080/api/a1/reports";

 constructor(private httpclient:HttpClient) { }

 getMonthlyReports():Observable<Report[]>{
  return this.httpclient.get<Report[]>(`${this.baseurl}`);

 }
 getselectedreports(month:string):Observable<Report[]>{
  return this.httpclient.get<Report[]>(`${this.baseurl}/${month}`);
 }


}
