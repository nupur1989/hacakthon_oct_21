import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTextDialogComponent } from './summary-text-dialog.component';

describe('SummaryTextDialogComponent', () => {
  let component: SummaryTextDialogComponent;
  let fixture: ComponentFixture<SummaryTextDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryTextDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryTextDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
