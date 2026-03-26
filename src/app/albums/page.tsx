"use client"

import { searchAlbum } from "@/lib/api";
import { useEffect, useRef, useState } from "react";
import { Album } from "@/lib/types";
import AlbumCard from "@/components/AlbumCard";
import "@/styles/Search.css";
import { AxiosError } from "axios";


export default function AlbumSearchPage() {
    const [Albums, setAlbums] = useState<Album[]>([]);
    const [busqueda, setbusqueda] = useState("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [search, setSearch] = useState<boolean>(false)
    const timeout = useRef<number>(0);

    async function fetchAlbums() {
        const query = busqueda.trim();
        searchAlbum(query).then((res) => setAlbums(res)).catch((e: AxiosError) => {
            setError(e.message)
        }).finally(() => {
            setLoading(false);
        })
    }

    useEffect(() => {

        if (timeout) {
            clearTimeout(timeout.current);
            timeout.current = setTimeout(fetchAlbums, 250)
            setSearch(!search)
        }
    }, [busqueda])


    return (
        <div>
            <div className="searchContainer">
                <input
                    type="text"
                    placeholder="Buscar un album..."
                    value={busqueda}
                    className="searchInput"
                    onChange={(e) => setbusqueda(e.target.value)}
                    /* onBlur={() => {setSearch(!search)}}
                    onKeyDown={e => { if (e.key === "Enter") { setSearch(!search) } }}
             */    />

                <button className="searchButton" onClick={() => setSearch(!search)}>Buscar</button>
            </div>

            <div>
                {!Albums && loading && <h1>Loading...</h1>}
                {Albums ?
                    (<div className="resultados">
                        <section className="grid">
                            {Albums.map((album) => (
                                <AlbumCard key={album.collectionId} album={album} />
                            ))}
                        </section>
                    </div>) : <></>}
                {error && <h2>{error}</h2>}
            </div>



        </div>

    )
}