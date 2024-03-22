import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchMasterComponent } from './batch-master.component';

describe('BatchMasterComponent', () => {
  let component: BatchMasterComponent;
  let fixture: ComponentFixture<BatchMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatchMasterComponent]
    });
    fixture = TestBed.createComponent(BatchMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
