import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyuploadComponent } from './facultyupload.component';

describe('FacultyuploadComponent', () => {
  let component: FacultyuploadComponent;
  let fixture: ComponentFixture<FacultyuploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultyuploadComponent]
    });
    fixture = TestBed.createComponent(FacultyuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
