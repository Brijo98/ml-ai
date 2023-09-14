import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentAddComponent } from './sentiment-add.component';

describe('SentimentAddComponent', () => {
  let component: SentimentAddComponent;
  let fixture: ComponentFixture<SentimentAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentimentAddComponent]
    });
    fixture = TestBed.createComponent(SentimentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
