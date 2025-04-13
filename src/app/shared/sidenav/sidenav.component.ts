import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Playlist } from '../../playlist';

@Component({
  selector: 'app-sidenav',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent implements OnInit {
  playlists: Playlist[] = [];

  ngOnInit(): void {
    this.playlists = this.getMockPlaylists();
  }

  getMockPlaylists(): Playlist[] {
    return [
      {
        kind: 'playlist',
        id: '1',
        title: 'My playlist 1',
        creator: 'test',
        tracks: [],
        imageUrl: '/placeholder.png',
      },
      {
        kind: 'playlist',
        id: '2',
        title: 'My playlist 2',
        creator: 'test',
        tracks: [],
        imageUrl: '/placeholder.png',
      },
    ];
  }
}
