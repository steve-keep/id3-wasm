/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} head
* @returns {boolean}
*/
export function hasId3v2Tag(head: Uint8Array): boolean;
/**
*/
export class AlbumCoverMetadatum {
  free(): void;
  /**
  */
  readonly data: Uint8Array;
  /**
  */
  readonly mimeType: string;
}
/**
*/
export class CommentMetadatum {
  free(): void;
  /**
  */
  readonly description: string;
  /**
  */
  readonly lang: string;
  /**
  */
  readonly text: string;
}
/**
*/
export class ExtendedTextMetadatum {
  free(): void;
  /**
  */
  readonly description: string;
  /**
  */
  readonly value: string;
}
/**
*/
export class Metadata {
  free(): void;
  /**
  */
  readonly album?: string;
  /**
  */
  readonly albumArtist?: string;
  /**
  */
  readonly albumCover?: AlbumCoverMetadatum;
  /**
  */
  readonly artist?: string;
  /**
  */
  readonly comments: any[];
  /**
  */
  readonly dateRecorded?: string;
  /**
  */
  readonly dateReleased?: string;
  /**
  */
  readonly discCount?: number;
  /**
  */
  readonly discIndex?: number;
  /**
  */
  duration?: number;
  /**
  */
  readonly genre?: string;
  /**
  */
  readonly lyrics: any[];
  /**
  */
  readonly publisher?: string;
  /**
  */
  readonly title?: string;
  /**
  */
  trackCount?: number;
  /**
  */
  trackIndex?: number;
  /**
  */
  year?: number;
}
/**
*/
export class TagController {
  free(): void;
  /**
  * @returns {TagController}
  */
  static new(): TagController;
  /**
  * @param {Uint8Array} head
  * @param {Uint8Array | undefined} tail
  * @returns {TagController}
  */
  static fromPartial(head: Uint8Array, tail?: Uint8Array): TagController;
  /**
  * @param {Uint8Array} buffer
  * @returns {TagController}
  */
  static from(buffer: Uint8Array): TagController;
  /**
  * @param {string} artist
  */
  setArtist(artist: string): void;
  /**
  */
  removeArtist(): void;
  /**
  * @param {string} title
  */
  setTitle(title: string): void;
  /**
  */
  removeTitle(): void;
  /**
  * @param {string} album
  */
  setAlbum(album: string): void;
  /**
  */
  removeAlbum(): void;
  /**
  * @param {string} album_artist
  */
  setAlbumArtist(album_artist: string): void;
  /**
  */
  removeAlbumArtist(): void;
  /**
  * @param {string} genre
  */
  setGenre(genre: string): void;
  /**
  */
  removeGenre(): void;
  /**
  * @param {number} track_index
  */
  setTrackIndex(track_index: number): void;
  /**
  */
  removeTrackIndex(): void;
  /**
  * @param {number} track_count
  */
  setTrackCount(track_count: number): void;
  /**
  */
  removeTrackCount(): void;
  /**
  * @param {number} disc_index
  */
  setDiscIndex(disc_index: number): void;
  /**
  */
  removeDiscIndex(): void;
  /**
  * @param {number} disc_count
  */
  setDiscCount(disc_count: number): void;
  /**
  */
  removeDiscCount(): void;
  /**
  * @param {number} year
  */
  setYear(year: number): void;
  /**
  */
  removeYear(): void;
  /**
  * yyyy-MM-ddTHH:mm:ss
  * @param {string} timestamp
  */
  setDateRecorded(timestamp: string): void;
  /**
  * @param {string} timestamp
  */
  setDateReleased(timestamp: string): void;
  /**
  * @param {number} duration_in_seconds
  */
  setDuration(duration_in_seconds: number): void;
  /**
  * @param {string} publisher
  */
  setPublisher(publisher: string): void;
  /**
  * Puts the tag into the buffer and returns the new buffer.
  * Not-in-place method.
  * @param {Uint8Array} buffer
  * @returns {Uint8Array}
  */
  putTagInto(buffer: Uint8Array): Uint8Array;
  /**
  * @param {CommentMetadatum} lyrics
  */
  addLyrics(lyrics: CommentMetadatum): void;
  /**
  * @returns {Metadata}
  */
  getMetadata(): Metadata;
}
