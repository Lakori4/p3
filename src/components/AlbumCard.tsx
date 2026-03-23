import { useMusic } from "@/context/MusicContext";
import { Album } from "@/lib/types";
import Image from "next/image"
import Link from "next/link";
import "..styles/AlbumCard.css";

type AlbumProps = {
    album: Album
}

export default function AlbumCard({ album }: AlbumProps) {

    const { favAlbumsListPush } = useMusic();


    return (
        <div className="albumCard">
            <Link href={`/albums/${album.collectionId}`}>
                <div className="imagenCard">

                    <img
                        src={album.artworkUrl100}
                        alt={`Foto de ${album.collectionName}`}
                        className="Imagen"
                    />
                </div>
                <div className="TituloCard">
                    <h1>{album.collectionName}</h1>
                    <button onClick={() => favAlbumsListPush(album)}>Añadir a Favs</button>
                </div>
            </Link>
        </div>
    )
}