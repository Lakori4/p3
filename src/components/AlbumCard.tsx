import { Album } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type AlbumProps = {
    album: Album
}

export default function AlbumCard ( {album}: AlbumProps){
    return (
        <div className="albumCard">
            <Link href={`/albums/${album.collectionId}`}>
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
            </Link>
        </div>
    )
}