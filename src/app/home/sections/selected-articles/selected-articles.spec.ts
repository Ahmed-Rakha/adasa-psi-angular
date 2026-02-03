import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedArticles } from './selected-articles';

describe('SelectedArticles', () => {
  let component: SelectedArticles;
  let fixture: ComponentFixture<SelectedArticles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedArticles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedArticles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
