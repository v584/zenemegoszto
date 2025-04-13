import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FeedComponent } from './pages/feed/feed.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { AlbumComponent } from './pages/album/album.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'playlist', component: PlaylistComponent },
  { path: 'album', component: AlbumComponent },
  { path: '**', component: HomeComponent },
];
