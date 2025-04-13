import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybackControlComponent } from './playback-control.component';

describe('PlaybackControlComponent', () => {
  let component: PlaybackControlComponent;
  let fixture: ComponentFixture<PlaybackControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaybackControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaybackControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
