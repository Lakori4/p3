export type Album={
    artistName: string;
    trackName: string;
    trackViewUrl: string;
}


export type AlbumDetail={
    artistName: string;
    trackName: string;
    trackViewUrl: string;
    longDescription: string;
}

export type AlbumResponse={
    albums: Album[];
}