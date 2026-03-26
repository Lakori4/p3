"use client"
import { useParams } from "next/navigation";
import { getAlbumbyId } from "@/lib/api";
import AlbumCardDetail from "@/components/AlbumCardDetail";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { Album } from "@/lib/types";
import "@/app/styles.css"

export default function AlbumSearchPageDetail() {
    const { id } = useParams();

    const realId = Array.isArray(id) ? id.join("") : id;


    const [album, setAlbum] = useState<Album | null>(null);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!realId) {
            setLoading(false);
            setError("No se encontró el parámetro en la URL.");
            return;
        }
        getAlbumbyId(realId).then((res) => {
            setAlbum(res[0]);
        }).catch((e: AxiosError) => {
            setError(e.message)
        }).finally(() => {
            setLoading(false);
        })
    }, [id]);


    return (

        <div>
            {!album && loading && <h1>Loading...</h1>}
            {album ?
            (<>
                <AlbumCardDetail album={album} />
            </>): <></>}
            {error && <h2>{error}</h2>}
        </div>
    );

} 