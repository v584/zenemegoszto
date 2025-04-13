import { Component } from '@angular/core';
import { CurrentTrackService } from '../../current-track.service';
import { Subscription } from 'rxjs';
import { Track } from '../../track';
import { ArtistsListPipe } from '../../artists-list.pipe';

@Component({
  selector: 'app-playback-control',
  imports: [ArtistsListPipe],
  templateUrl: './playback-control.component.html',
  styleUrl: './playback-control.component.css',
})
export class PlaybackControlComponent {
  currentTrack: Track | null = null;
  trackSubscription: Subscription | undefined;

  constructor(private currentTrackService: CurrentTrackService) {}

  ngOnInit(): void {
    this.trackSubscription = this.currentTrackService.currentTrack$.subscribe(
      (track) => {
        this.currentTrack = track;
      },
    );
  }

  ngOnDestroy(): void {
    if (this.trackSubscription) {
      this.trackSubscription.unsubscribe();
    }
  }
}
