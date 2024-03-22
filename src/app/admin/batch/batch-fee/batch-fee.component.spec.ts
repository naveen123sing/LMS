import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchFeeComponent } from './batch-fee.component';

describe('BatchFeeComponent', () => {
  let component: BatchFeeComponent;
  let fixture: ComponentFixture<BatchFeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatchFeeComponent]
    });
    fixture = TestBed.createComponent(BatchFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
