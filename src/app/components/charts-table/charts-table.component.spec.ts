import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsTableComponent } from './charts-table.component';

describe('ChartsTableComponent', () => {
  let component: ChartsTableComponent;
  let fixture: ComponentFixture<ChartsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
