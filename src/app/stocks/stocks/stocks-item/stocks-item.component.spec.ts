import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksItemComponent } from './stocks-item.component';

describe('StocksItemComponent', () => {
  let component: StocksItemComponent;
  let fixture: ComponentFixture<StocksItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocksItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
