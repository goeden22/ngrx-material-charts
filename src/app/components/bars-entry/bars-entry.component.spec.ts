import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsEntryComponent } from './bars-entry.component';

describe('BarsEntryComponent', () => {
  let component: BarsEntryComponent;
  let fixture: ComponentFixture<BarsEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarsEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
