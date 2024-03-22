import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectreportComponent } from './subjectreport.component';

describe('SubjectreportComponent', () => {
  let component: SubjectreportComponent;
  let fixture: ComponentFixture<SubjectreportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectreportComponent]
    });
    fixture = TestBed.createComponent(SubjectreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
