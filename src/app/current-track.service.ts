import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Track } from './track';

@Injectable({
  providedIn: 'root',
})
export class CurrentTrackService {
  private currentTrackSource = new BehaviorSubject<Track | null>(null);
  currentTrack$ = this.currentTrackSource.asObservable();

  constructor() {}

  setCurrentTrack(track: Track): void {
    console.log('Playing track set:', track);
    this.currentTrackSource.next(track);
  }

  getCurrentTrack(): Track | null {
    return this.currentTrackSource.value;
  }
}
