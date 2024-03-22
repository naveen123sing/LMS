import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsComponent } from './reports.component';
import { NgChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ReportsComponent', () => {
  let component: ReportsComponent;
  let fixture: ComponentFixture<ReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportsComponent],
      imports: [
        NgChartsModule,
        RouterModule,
        RouterTestingModule
      ],
    });
    fixture = TestBed.createComponent(ReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initialized barChartOptions', () => {
    expect(component.barChartOptions).toBeDefined();
  });

  it('should have initialized barChartData', () => {
    expect(component.barChartData).toBeDefined();
  });

  it('should have at least one dataset in barChartData', () => {
    expect(component.barChartData.datasets.length).toBeGreaterThan(0);
  });
});
