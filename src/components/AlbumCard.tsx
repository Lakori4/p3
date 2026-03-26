import { useMusic } from "@/context/MusicContext";
import { Album } from "@/lib/types";
import Link from "next/link";
import "./AlbumCard.css";

type AlbumProps = {
    album: Album
}

export default function AlbumCard({ album }: AlbumProps) {

    const { favAlbumsList, favAlbumsListPush, favAlbumsListPop } = useMusic();


    return (
        <div className="albumCard">
            <Link href={`/albums/${album.collectionId}`}>
                <div className="imagenCard">

                    <img
                        src={album.artworkUrl100}
                        alt={`Foto de ${album.collectionName}`}
                        className="Imagen"
                    />
                    { !favAlbumsList.some(i => i.collectionId === album.collectionId) ? 
                        <button onClick={(e) => { 
                            e.preventDefault(); 
                            e.stopPropagation(); 
                            favAlbumsListPush(album); }}> Añadir a Favs</button> : 
                            <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); favAlbumsListPop(album); }}>Quitar de Favs</button>}
                </div>
            </Link>
            

            <div className="TituloCard">
                <h1>{album.collectionName}</h1>
            </div>

        </div>
    )
}