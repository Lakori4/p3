export type Album = {
    collectionId: string
    artistName: string;
    collectionName: string;
    artworkUrl100: string;
    country: string;
    trackCount: number;
    collectionExplicitness: string;
    primaryGenreName: string;
    releaseDate: string,
}


export type AlbumResponse = {
    results: Album[];
}