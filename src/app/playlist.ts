import { Collection } from './collection';

export interface Playlist extends Collection {
  kind: 'playlist';
  creator: string;
}
