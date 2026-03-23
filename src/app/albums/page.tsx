import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { searchAlbum } from "@/lib/api";
import { useEffect, useState } from "react";
import { Album } from "@/lib/types";


export default async function AlbumSearchPage() {
    const [Albums,setAlbums] = useState <Album[]>([]);
    const [busqueda, setbusqueda] = useState ("");
    const [search, setSearch]= useState<boolean>(false)

    useEffect (()=>{

        async function fetchAlbums() {
            const query = busqueda.trim();
            const data= searchAlbum(query)
            setAlbums(await data)
        }
        fetchAlbums();

    })
    return (
        <div>
            <div className="searchContainer">
                <input 
                type="text" 
                placeholder="Buscar un cocktail..." 
                value={busqueda} 
                onChange={(e) => setbusqueda(e.target.value)} 
                className="searchInput"
                />

                <button className="searchButton" onClick={() => setSearch(!search)}>Buscar</button>
            </div>

        </div>
        
    )
}