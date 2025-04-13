import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { PlaybackControlComponent } from './shared/playback-control/playback-control.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlaybackControlComponent, SidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'zenemegoszto';
}
