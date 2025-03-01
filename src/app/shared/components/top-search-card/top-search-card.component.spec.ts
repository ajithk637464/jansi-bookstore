import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSearchCardComponent } from './top-search-card.component';

describe('TopSearchCardComponent', () => {
  let component: TopSearchCardComponent;
  let fixture: ComponentFixture<TopSearchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopSearchCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSearchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
