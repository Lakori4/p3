export type Album = {
    collectionId: string
    artistName: string;
    trackName: string;
    trackViewUrl: string;
}


export type AlbumResponse = {
    results: Album[];
}