import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordAddComponent } from './keyword-add.component';

describe('KeywordAddComponent', () => {
  let component: KeywordAddComponent;
  let fixture: ComponentFixture<KeywordAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeywordAddComponent]
    });
    fixture = TestBed.createComponent(KeywordAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
