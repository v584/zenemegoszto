export interface Track {
  id: string;
  title: string;
  artists: string[];
  durationSeconds: number;
  album?: string;
  coverUrl?: string;
  releaseDate: Date;
}
