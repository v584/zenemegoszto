import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { Track } from '../../track';
import { CurrentTrackService } from '../../current-track.service';
import { CollectionComponent } from '../../shared/collection/collection.component';
import { Album } from '../../album';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    CollectionComponent,
  ],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css',
})
export class AlbumComponent {
  album: Album | null = null;

  constructor(private currentTrackService: CurrentTrackService) {}

  play(track: Track): void {
    this.currentTrackService.setCurrentTrack(track);
  }

  ngOnInit(): void {
    this.album = this.getMockAlbum();
  }

  getMockAlbum(): Album {
    const albumReleaseDate = new Date('2011-12-23');
    const albumCoverUrl = '/placeholder.png';
    const albumTitle = 'Bangarang';
    const albumArtist = 'Skrillex';

    const tracks: Track[] = [
      {
        id: '1',
        title: 'Right In',
        artists: ['Skrillex'],
        durationSeconds: 180,
        album: albumTitle,
        coverUrl: albumCoverUrl,
        releaseDate: albumReleaseDate,
      },
      {
        id: '2',
        title: 'Bangarang',
        artists: ['Skrillex', 'Sirah'],
        durationSeconds: 215,
        album: albumTitle,
        coverUrl: albumCoverUrl,
        releaseDate: albumReleaseDate,
      },
      {
        id: '3',
        title: "Breakn' a Sweat",
        artists: ['Skrillex', 'The Doors'],
        durationSeconds: 297,
        album: albumTitle,
        coverUrl: albumCoverUrl,
        releaseDate: albumReleaseDate,
      },
      {
        id: '4',
        title: "The Devil's Den",
        artists: ['Skrillex'],
        durationSeconds: 212,
        album: albumTitle,
        coverUrl: albumCoverUrl,
        releaseDate: albumReleaseDate,
      },
      {
        id: '5',
        title: 'Right on Time',
        artists: ['Skrillex'],
        durationSeconds: 242,
        album: albumTitle,
        coverUrl: albumCoverUrl,
        releaseDate: albumReleaseDate,
      },
      {
        id: '6',
        title: 'Kyoto',
        artists: ['Skrillex', 'Sirah'],
        durationSeconds: 200,
        album: albumTitle,
        coverUrl: albumCoverUrl,
        releaseDate: albumReleaseDate,
      },
      {
        id: '7',
        title: 'Summit',
        artists: ['Skrillex', 'Ellie Goulding'],
        durationSeconds: 267,
        album: albumTitle,
        coverUrl: albumCoverUrl,
        releaseDate: albumReleaseDate,
      },
    ];

    const album: Album = {
      id: 'bangarang-ep-id',
      kind: 'album',
      title: albumTitle,
      artist: albumArtist,
      releaseDate: albumReleaseDate,
      tracks: tracks,
      imageUrl: albumCoverUrl,
    };

    return album;
  }
}
