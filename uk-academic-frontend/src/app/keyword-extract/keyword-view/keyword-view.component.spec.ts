import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordViewComponent } from './keyword-view.component';

describe('KeywordViewComponent', () => {
  let component: KeywordViewComponent;
  let fixture: ComponentFixture<KeywordViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeywordViewComponent]
    });
    fixture = TestBed.createComponent(KeywordViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
