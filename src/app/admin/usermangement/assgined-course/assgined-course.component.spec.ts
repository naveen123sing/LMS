import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssginedCourseComponent } from './assgined-course.component';

describe('AssginedCourseComponent', () => {
  let component: AssginedCourseComponent;
  let fixture: ComponentFixture<AssginedCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssginedCourseComponent]
    });
    fixture = TestBed.createComponent(AssginedCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
