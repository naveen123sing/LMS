import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountmanagementComponent } from './accountmanagement.component';

describe('AccountmanagementComponent', () => {
  let component: AccountmanagementComponent;
  let fixture: ComponentFixture<AccountmanagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountmanagementComponent]
    });
    fixture = TestBed.createComponent(AccountmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
