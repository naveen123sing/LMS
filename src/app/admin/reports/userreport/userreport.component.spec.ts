import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserreportComponent } from './userreport.component';

describe('UserreportComponent', () => {
  let component: UserreportComponent;
  let fixture: ComponentFixture<UserreportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserreportComponent]
    });
    fixture = TestBed.createComponent(UserreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
