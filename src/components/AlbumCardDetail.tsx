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
                        src={album.trackViewUrl}
                        alt={`Foto de ${album.trackName}`}
                        fill
                        className="Imagen"

                    />
                </div>
                <div>
                    <h1>{album.trackName}</h1>
                </div>

        </div>
    )
}