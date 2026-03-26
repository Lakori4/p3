"use client"
import AlbumCard from "@/components/AlbumCardDetail";
import { useMusic } from "@/context/MusicContext"
import "@/styles/Search.css"


const Favoritos = () => {


    const { favAlbumsList, favAlbumsListPop } = useMusic();

    console.log("albums", favAlbumsList)

    return (
        <div className="resultados">
            <section className="grid">
                {favAlbumsList.length ? favAlbumsList.map(a => (
                        <AlbumCard album={a} key={a.collectionId}/>
                )) : <h1>No hay favs</h1>}
            </section>
        </div>
    )
}

export default Favoritos