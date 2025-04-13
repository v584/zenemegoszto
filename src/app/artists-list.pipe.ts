import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artistsList',
  standalone: true,
})
export class ArtistsListPipe implements PipeTransform {
  transform(artists: string[] | undefined): string {
    if (!artists || artists.length === 0) {
      return 'Unknown artist';
    }
    return artists.join(', ');
  }
}
