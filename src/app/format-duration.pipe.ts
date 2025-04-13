import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDuration',
})
export class FormatDurationPipe implements PipeTransform {
  transform(seconds: number): string {
    if (typeof seconds !== 'number' || isNaN(seconds)) {
      return '0:00';
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
}
