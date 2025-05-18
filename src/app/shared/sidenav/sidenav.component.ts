import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Playlist } from '../../playlist';
import { MatButtonModule } from '@angular/material/button';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver) {}
  playlists: Playlist[] = [];
  isSidenavOpened = false;
  sidenavMode: 'over' | 'side' = 'over';

  ngOnInit(): void {
    this.playlists = this.getMockPlaylists();

    this.breakpointObserver
      .observe([Breakpoints.Small])
      .subscribe((result: any) => {
        if (result.matches) {
          this.sidenavMode = 'over';
          this.isSidenavOpened = false;
        } else {
          this.sidenavMode = 'side';
          this.isSidenavOpened = true;
        }
      });
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
