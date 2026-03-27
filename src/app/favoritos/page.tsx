"use client"
import AlbumCard from "@/components/AlbumCard";
import { useMusic } from "@/context/MusicContext"
import "@/app/styles.css"


const Favoritos = () => {


    const { favAlbumsList, favAlbumsListPop } = useMusic();


    return (
        <div className="resultados">
            <section className="grid">
                {favAlbumsList.length ? favAlbumsList.map(a => (
                    <AlbumCard album={a} key={a.collectionId} />
                )) : <h1>No hay favs</h1>}
            </section>
        </div>
    )
}

export default Favoritos