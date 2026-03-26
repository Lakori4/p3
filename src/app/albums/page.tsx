"use client"

import { searchAlbum } from "@/lib/api";
import { useEffect, useRef, useState } from "react";
import { Album } from "@/lib/types";
import AlbumCard from "@/components/AlbumCard";
import "@/styles/Search.css";


export default function AlbumSearchPage() {
    const [Albums, setAlbums] = useState<Album[]>([]);
    const [busqueda, setbusqueda] = useState("");
    const [search, setSearch] = useState<boolean>(false)
    const timeout = useRef<number>(0);

    async function fetchAlbums() {
        const query = busqueda.trim();
        const data = await searchAlbum(query)
        setAlbums(data)
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

            <div className="resultados">
                <section className="grid">
                    {Albums.map((album) => (
                        <AlbumCard key={album.collectionId} album={album} />
                    ))}
                </section>
            </div>

        </div>

    )
}