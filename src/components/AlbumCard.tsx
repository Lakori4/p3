import { Album } from "@/lib/types";
import Link from "next/link";

type AlbumProps = {
    album: Album
}

export default function AlbumCard({ album }: AlbumProps) {
    return (
        <div className="albumCard">
            <Link href={`/albums/${album.collectionId}`}>
                <div className="imagenCard">
                    <img
                        src={album.trackViewUrl}
                        alt={`Foto de ${album.trackName}`}
                        className="Imagen"

                    />
                </div>
                <div>
                    <h1>{album.trackName}</h1>
                </div>
            </Link>
        </div>
    )
}