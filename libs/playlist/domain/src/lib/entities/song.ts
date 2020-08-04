export interface Song {
  id: string;
  title: string;
  artists: string[];
  artistsTitle: string;
  bpm: number;
  creatorFriendly: boolean;
  debutDate: Date;
  downloadable: boolean;
  duration: number;
  explicit: boolean;
  genrePrimary: string;
  genreSecondary: string;
  inEarlyAccess: boolean;
  isrc: string;
  release: string;
  streamable: boolean;
  tags: string[];
}
