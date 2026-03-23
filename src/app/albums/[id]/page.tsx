"use client"
import { useParams } from "next/navigation";
import { getAlbumbyId } from "@/lib/api";
import AlbumCardDetail from "@/components/AlbumCardDetail";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { Album } from "@/lib/types";


type PageProps = {
    params: Promise<{ id: string }>;
}

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

    if (!album) {
        return <h1>kjadf</h1>
    }


    return <AlbumCardDetail album={album} />;

} 