import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FeedComponent } from './pages/feed/feed.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { AlbumComponent } from './pages/album/album.component';
import { publicGuard } from './shared/guards/public/public.guard';
import { authGuard } from './shared/guards/auth/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [publicGuard] },
  { path: 'feed', component: FeedComponent, canActivate: [authGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  { path: 'playlist', component: PlaylistComponent, canActivate: [authGuard] },
  { path: 'album', component: AlbumComponent, canActivate: [authGuard] },
  { path: '**', component: HomeComponent, canActivate: [authGuard] },
];
