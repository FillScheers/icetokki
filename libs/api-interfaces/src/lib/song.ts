export interface Artist {
  id: string;
  name: string;
  public: boolean;
  role: string;
  uri: string;
}

export interface Release {
  artistsTitle: string;
  catalogId: string;
  id: string;
  releaseDate: Date;
  tags?: any;
  title: string;
  type: string;
  upc: string;
}

export interface Result {
  artists: Artist[];
  artistsTitle: string;
  bpm: number;
  creatorFriendly: boolean;
  debutDate: Date;
  downloadable: boolean;
  duration: number;
  explicit: boolean;
  genrePrimary: string;
  genreSecondary: string;
  id: string;
  inEarlyAccess: boolean;
  isrc: string;
  playlistSort: number;
  release: Release;
  streamable: boolean;
  tags: string[];
  title: string;
  trackNumber: number;
  version: string;
}

export interface Response {
  limit: number;
  notFound?: any;
  results: Result[];
  skip: number;
  total: number;
}
