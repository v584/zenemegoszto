import { Collection } from './collection';

export interface Album extends Collection {
  kind: 'album';
  artist: string;
  releaseDate: Date;
}
