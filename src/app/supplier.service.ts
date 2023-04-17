import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from './supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private baseURL="http://localhost:8080/api/a1/salary";

  constructor(private httpClient:HttpClient) { 

  }

  getEmployeeById(id: number): Observable<Supplier>{
    return this.httpClient.get<Supplier>(`${this.baseURL}/${id}`);
  }

getSuppliersList():Observable<Supplier[]>{
  return this.httpClient.get<Supplier[]>(`${this.baseURL}`);
   }

   addSalaryReports(supplier:Supplier):Observable<Object>{
    return this.httpClient.post(this.baseURL,supplier);
    
  }
  updateReport(id: number,salary: Supplier): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, salary);
  }
  deleteReport(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


}
