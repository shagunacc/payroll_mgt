import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatButtonModule, MatIconButton} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { SalaryReportsComponent } from './salary-reports/salary-reports.component';
import { AddReportComponent } from './add-report/add-report.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatListModule} from '@angular/material/list'; 
import { HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { AddReportDialogComponent } from './add-report-dialog/add-report-dialog.component'; 
import{MatSelectModule} from '@angular/material/select';
import { UpdateEmployeeDialogComponent } from './update-employee-dialog/update-employee-dialog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { MonthlyReportsComponent } from './monthly-reports/monthly-reports.component';
import { SelectedReportComponent } from './selected-report/selected-report.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    // EmployeeListComponent,
    AddEmployeeComponent,
    SalaryReportsComponent,
    AddReportComponent,
    EmployeeListComponent,
    AddReportDialogComponent,
    UpdateEmployeeDialogComponent,
    DashboardComponent,
    ErrorComponent,
    MonthlyReportsComponent,
    SelectedReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
