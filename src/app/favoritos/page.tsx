"use client"
import AlbumCard from "@/components/AlbumCardDetail";
import { useMusic } from "@/context/MusicContext"
import "@/app/styles.css"


const Favoritos = () => {


    const { favAlbumsList, favAlbumsListPop } = useMusic();

    console.log("albums", favAlbumsList)

    return (

        <div className="grid">
            {favAlbumsList.length ? favAlbumsList.map(a => (
                <div key={a.collectionId}>
                    <AlbumCard album={a} />
                    <button onClick={() => favAlbumsListPop(a)}>Delete from favourites</button>
                </div>
            )) : <h1>No hay favs</h1>}
        </div>
    )
}

export default Favoritos