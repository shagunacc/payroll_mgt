import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddReportDialogComponent } from './add-report-dialog/add-report-dialog.component';
import { AddReportComponent } from './add-report/add-report.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
// import { LeaveRecordsComponent } from './leave/leave-records/leave-records.component';
import { LoginComponent } from './login/login.component';
import { MonthlyReportsComponent } from './monthly-reports/monthly-reports.component';
import { RouteGuardService } from './route-guard.service';
import { SalaryReportsComponent } from './salary-reports/salary-reports.component';
import { SelectedReportComponent } from './selected-report/selected-report.component';
import { UpdateEmployeeDialogComponent } from './update-employee-dialog/update-employee-dialog.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"",redirectTo:"login",pathMatch:"full"},
  {
    path: "home",component:HomeComponent,canActivate:[RouteGuardService], children: [
      { path: '',component:DashboardComponent},
      { path: 'employee-list', component: EmployeeListComponent },
      { path: 'add-employee', component: AddEmployeeComponent },
      { path: 'salary-reports', component: SalaryReportsComponent },
      { path: 'add-report', component: AddReportComponent },
      {path:'update-employee/:id', component:UpdateEmployeeDialogComponent},
      {path:'update-report/:id',component:AddReportDialogComponent},
      {path:'monthly-reports',component:MonthlyReportsComponent},
      {path:'selected-reports/:month',component:SelectedReportComponent}
    ]
  },
  {path:'**',component:ErrorComponent}
  // 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
