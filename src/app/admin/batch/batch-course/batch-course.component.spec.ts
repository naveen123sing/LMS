import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchCourseComponent } from './batch-course.component';

describe('BatchCourseComponent', () => {
  let component: BatchCourseComponent;
  let fixture: ComponentFixture<BatchCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatchCourseComponent]
    });
    fixture = TestBed.createComponent(BatchCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
