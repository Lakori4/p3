import { useMusic } from "@/context/MusicContext";
import { Album } from "@/lib/types";
import Link from "next/link";
import "@/styles/AlbumCard.css";

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
                    { !favAlbumsList.includes(album) ? 
                        <button onClick={(e) => { 
                            e.preventDefault(); 
                            e.stopPropagation(); 
                            favAlbumsListPush(album); 
                            console.log("pushed", album, favAlbumsList); }}> Añadir a Favs</button> : 
                            <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); favAlbumsListPop(album); console.log("popped", album, favAlbumsList); }}>Quitar de Favs</button>}
                </div>
            </Link>
            

            <div className="TituloCard">
                <h1>{album.collectionName}</h1>
            </div>

        </div>
    )
}