import { Album } from "@/lib/types";
import "./AlbumDetail.css"
import Link from "next/link";

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
        <div className="albumDetail">

            <div className="imagenDetail">
                <img
                    src={album.artworkUrl100}
                    alt={`Foto de ${album.collectionName}`}
                />
                <button><Link href={album.collectionViewUrl} target="_blank">Ver album en Apple Music</Link></button>
                <button><Link href={album.artistViewUrl} target="_blank">Ver artista en Apple Music</Link></button>
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