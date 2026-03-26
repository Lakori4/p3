import { Album } from "@/lib/types";

type AlbumProps = {
    album: Album
}

const AlbumCardDetail = ({ album }: AlbumProps) => {
    return (
        <div className="albumCard">

            <div className="imagenCard">
                <img
                    src={album.artworkUrl100}
                    alt={`Foto de ${album.collectionName}`}
                    className="Imagen"
                />
            </div>
            <div>
                <h1>{album.collectionName}</h1>
            </div>

        </div>
    )
}
export default AlbumCardDetail