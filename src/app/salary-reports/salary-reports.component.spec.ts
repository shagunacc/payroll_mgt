import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryReportsComponent } from './salary-reports.component';

describe('SalaryReportsComponent', () => {
  let component: SalaryReportsComponent;
  let fixture: ComponentFixture<SalaryReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
