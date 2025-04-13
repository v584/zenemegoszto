import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { Playlist } from '../../playlist';
import { Track } from '../../track';
import { CurrentTrackService } from '../../current-track.service';
import { CollectionComponent } from '../../shared/collection/collection.component';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    CollectionComponent,
  ],
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
})
export class PlaylistComponent implements OnInit {
  playlist: Playlist | null = null;

  constructor(private currentTrackService: CurrentTrackService) {}

  play(track: Track): void {
    this.currentTrackService.setCurrentTrack(track);
  }

  ngOnInit(): void {
    this.playlist = this.getMockPlaylist();
  }

  getMockPlaylist(): Playlist {
    const mockTracks: Track[] = [
      {
        id: 'track1',
        title: 'Bohemian Rhapsody',
        artists: ['Queen'],
        durationSeconds: 355,
        album: 'A Night at the Opera',
        coverUrl: '/placeholder.png',
        releaseDate: new Date('1975-10-31'),
      },
      {
        id: 'track2',
        title: 'Stairway to Heaven',
        artists: ['Led Zeppelin'],
        durationSeconds: 482,
        album: 'Led Zeppelin IV',
        coverUrl: '/placeholder.png',
        releaseDate: new Date('1971-11-08'),
      },
      {
        id: 'track3',
        title: 'Imagine',
        artists: ['John Lennon'],
        durationSeconds: 187,
        album: 'Imagine',
        coverUrl: '/placeholder.png',
        releaseDate: new Date('1971-10-08'),
      },
    ];

    const mockPlaylist: Playlist = {
      kind: 'playlist',
      id: 'playlist1',
      title: 'Rock Classics',
      creator: 'user123',
      imageUrl: '/placeholder.png',
      tracks: mockTracks,
    };

    return mockPlaylist;
  }
}
