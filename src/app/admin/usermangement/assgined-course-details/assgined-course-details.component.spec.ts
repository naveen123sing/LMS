import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssginedCourseDetailsComponent } from './assgined-course-details.component';

describe('AssginedCourseDetailsComponent', () => {
  let component: AssginedCourseDetailsComponent;
  let fixture: ComponentFixture<AssginedCourseDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssginedCourseDetailsComponent]
    });
    fixture = TestBed.createComponent(AssginedCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
