import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Track } from '../../track';
import { ArtistsListPipe } from '../../artists-list.pipe';
import { FormatDurationPipe } from '../../format-duration.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-track-list-item',
  imports: [ArtistsListPipe, FormatDurationPipe, RouterLink],
  standalone: true,
  templateUrl: './track-list-item.component.html',
  styleUrl: './track-list-item.component.css',
})
export class TrackListItemComponent {
  @Input({ required: true }) track!: Track;
  @Output() clicked = new EventEmitter<void>();
}
