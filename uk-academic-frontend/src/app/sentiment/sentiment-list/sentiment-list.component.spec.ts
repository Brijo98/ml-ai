import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentListComponent } from './sentiment-list.component';

describe('SentimentListComponent', () => {
  let component: SentimentListComponent;
  let fixture: ComponentFixture<SentimentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentimentListComponent]
    });
    fixture = TestBed.createComponent(SentimentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
