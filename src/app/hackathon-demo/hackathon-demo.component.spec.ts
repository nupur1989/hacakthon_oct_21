import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonDemoComponent } from './hackathon-demo.component';

describe('HackathonDemoComponent', () => {
  let component: HackathonDemoComponent;
  let fixture: ComponentFixture<HackathonDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackathonDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackathonDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
