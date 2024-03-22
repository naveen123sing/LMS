import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchFacultyComponent } from './batch-faculty.component';

describe('BatchFacultyComponent', () => {
  let component: BatchFacultyComponent;
  let fixture: ComponentFixture<BatchFacultyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatchFacultyComponent]
    });
    fixture = TestBed.createComponent(BatchFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
