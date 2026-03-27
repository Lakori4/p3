import { Album } from "@/lib/types";
import "./AlbumDetail.css"

type AlbumProps = {
    album: Album
}

const AlbumCardDetail = ({ album }: AlbumProps) => {

    const explicitness = () => {
        if (album.collectionExplicitness[0] === 'c') {
            return ("Censurado")
        } else if (album.collectionExplicitness[0] === 'e') {
            return "Explícito"
        } else {
            return "Seguro"
        }
    }

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
                <h1>{album.collectionName} - {album.artistName}</h1>
                <ul>
                    <li>Nº de pistas: {album.trackCount}</li>
                    <li>País: {album.country}</li>
                    <li>Género: {album.primaryGenreName}</li>
                    <li>Fecha de nacimiento: {album.releaseDate.split('T')[0]}</li>
                    <li>Contenido explícito: {explicitness()}</li>
                </ul>
            </div>

        </div>
    )
}
export default AlbumCardDetail