import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermangementComponent } from './usermangement.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('UsermangementComponent', () => {
  let component: UsermangementComponent;
  let fixture: ComponentFixture<UsermangementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsermangementComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(UsermangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
