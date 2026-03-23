import { Album } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type AlbumProps = {
    album: Album
}

export default function AlbumCardDetail ( {album}: AlbumProps){
    return (
        <div className="albumCard">

                <div className="imagenCard">
                    <Image
                        src={album.artworkUrl100}
                        alt={`Foto de ${album.collectionName}`}
                        fill
                        className="Imagen"

                    />
                </div>
                <div>
                    <h1>{album.collectionName}</h1>
                </div>

        </div>
    )
}