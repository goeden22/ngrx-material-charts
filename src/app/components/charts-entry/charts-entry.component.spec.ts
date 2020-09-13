import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsEntryComponent } from './charts-entry.component';

describe('ChartsEntryComponent', () => {
  let component: ChartsEntryComponent;
  let fixture: ComponentFixture<ChartsEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
