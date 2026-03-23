export type Album = {
    collectionId: string
    artistName: string;
    collectionName: string;
    artworkUrl100: string;
}


export type AlbumResponse = {
    results: Album[];
}