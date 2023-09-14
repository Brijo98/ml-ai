import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentViewComponent } from './sentiment-view.component';

describe('SentimentViewComponent', () => {
  let component: SentimentViewComponent;
  let fixture: ComponentFixture<SentimentViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentimentViewComponent]
    });
    fixture = TestBed.createComponent(SentimentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
