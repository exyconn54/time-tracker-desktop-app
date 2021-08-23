import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerSettingComponent } from './tracker-setting.component';

describe('TrackerSettingComponent', () => {
  let component: TrackerSettingComponent;
  let fixture: ComponentFixture<TrackerSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackerSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
