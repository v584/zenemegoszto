import { Track } from './track';

export interface Collection {
  id: string;
  kind: string;
  title: string;
  tracks: Track[];
  imageUrl?: string;
}
