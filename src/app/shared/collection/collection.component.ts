import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TrackListItemComponent } from '../track-list-item/track-list-item.component';
import { CurrentTrackService } from '../../current-track.service';
import { Track } from '../../track';
import { Playlist } from '../../playlist';
import { Album } from '../../album';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-collection',
  imports: [
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    DatePipe,
    TrackListItemComponent,
  ],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css',
})
export class CollectionComponent {
  @Input({ required: true }) collection!: Album | Playlist;

  constructor(private currentTrackService: CurrentTrackService) {}

  play(track: Track): void {
    this.currentTrackService.setCurrentTrack(track);
  }
}
