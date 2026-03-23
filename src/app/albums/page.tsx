"use client"
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { searchAlbum } from "@/lib/api";
import { useEffect, useState } from "react";
import { Album } from "@/lib/types";
import AlbumCard from "@/components/AlbumCard";


export default function AlbumSearchPage() {
    const [Albums, setAlbums] = useState<Album[]>([]);
    const [busqueda, setbusqueda] = useState("");
    const [search, setSearch] = useState<boolean>(false)

    useEffect(() => {

        async function fetchAlbums() {
            const query = busqueda.trim();
            console.log(query)
            const data = await searchAlbum(query)
            console.log(data)
            setAlbums(data)
        }
        fetchAlbums();

    }, [search, busqueda])
    return (
        <div>
            <div className="searchContainer">
                <input
                    type="text"
                    placeholder="Buscar un album..."
                    value={busqueda}
                    onChange={(e) => setbusqueda(e.target.value)}
                    className="searchInput"
                />

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