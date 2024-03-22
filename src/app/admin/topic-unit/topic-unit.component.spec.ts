import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicUnitComponent } from './topic-unit.component';

describe('TopicUnitComponent', () => {
  let component: TopicUnitComponent;
  let fixture: ComponentFixture<TopicUnitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopicUnitComponent]
    });
    fixture = TestBed.createComponent(TopicUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
