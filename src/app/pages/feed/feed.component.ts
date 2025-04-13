import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Track } from '../../track';
import { TrackListItemComponent } from '../../shared/track-list-item/track-list-item.component';
import { CurrentTrackService } from '../../current-track.service';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [MatCardModule, TrackListItemComponent],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  tracks: Track[] = [];

  constructor(private currentTrackService: CurrentTrackService) {}

  ngOnInit(): void {
    this.tracks = this.getMockTracks();
  }

  play(track: Track): void {
    this.currentTrackService.setCurrentTrack(track);
  }

  getMockTracks(): Track[] {
    return [
      {
        id: 'track-1',
        title: 'Golden Hour',
        artists: ['JVKE'],
        durationSeconds: 212,
        album: 'This Is What ____ Feels Like (Vol. 1-4)',
        coverUrl: '/placeholder.png',
        releaseDate: new Date('2022-07-15'),
      },
      {
        id: 'track-2',
        title: 'As It Was',
        artists: ['Harry Styles'],
        durationSeconds: 167,
        album: "Harry's House",
        coverUrl: '/placeholder.png',
        releaseDate: new Date('2022-03-31'),
      },
      {
        id: 'track-3',
        title: 'Flowers',
        artists: ['Miley Cyrus'],
        durationSeconds: 200,
        album: 'Endless Summer Vacation',
        coverUrl: '/placeholder.png',
        releaseDate: new Date('2023-01-12'),
      },
      {
        id: 'track-4',
        title: 'Blinding Lights',
        artists: ['The Weeknd'],
        durationSeconds: 200,
        album: 'After Hours',
        coverUrl: '/placeholder.png',
        releaseDate: new Date('2019-11-29'),
      },
      {
        id: 'track-5',
        title: 'Save Your Tears (Remix) (with Ariana Grande)',
        artists: ['The Weeknd', 'Ariana Grande'],
        durationSeconds: 191,
        album: 'After Hours (Deluxe)',
        coverUrl: '/placeholder.png',
        releaseDate: new Date('2021-04-23'),
      },
      {
        id: 'track-6',
        title: 'Stay (with Justin Bieber)',
        artists: ['The Kid LAROI', 'Justin Bieber'],
        durationSeconds: 141,
        album: 'F*CK LOVE 3: OVER YOU',
        coverUrl: '/placeholder.png',
        releaseDate: new Date('2021-07-09'),
      },
      {
        id: 'track-7',
        title: 'Heat Waves',
        artists: ['Glass Animals'],
        durationSeconds: 238,
        album: 'Dreamland (+ Bonus Levels)',
        coverUrl: '/placeholder.png',
        releaseDate: new Date('2020-06-29'),
      },
      {
        id: 'track-8',
        title: 'Levitating (feat. DaBaby)',
        artists: ['Dua Lipa', 'DaBaby'],
        durationSeconds: 203,
        album: 'Future Nostalgia',
        coverUrl: '/placeholder.png',
        releaseDate: new Date('2020-03-27'),
      },
      {
        id: 'track-9',
        title: 'Watermelon Sugar',
        artists: ['Harry Styles'],
        durationSeconds: 174,
        album: 'Fine Line',
        coverUrl: '/placeholder.png',
        releaseDate: new Date('2019-12-13'),
      },
      {
        id: 'track-10',
        title: 'Sunflower - Spider-Man: Into the Spider-Verse',
        artists: ['Post Malone', 'Swae Lee'],
        durationSeconds: 158,
        album:
          'Spider-Man: Into the Spider-Verse (Soundtrack From & Inspired by the Motion Picture)',
        coverUrl: '/placeholder.png',
        releaseDate: new Date('2018-10-19'),
      },
    ];
  }
}
