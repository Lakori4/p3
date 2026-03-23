"use client"
import AlbumCard from "@/components/AlbumCardDetail";
import { useMusic } from "@/context/MusicContext"



const Favoritos = () => {


    const { favAlbumsList, favAlbumsListPop } = useMusic();

    console.log(favAlbumsList)

    return (

        <div>
            {favAlbumsList.length ? favAlbumsList.map(a => (
                <div key={a.collectionId}>
                    <AlbumCard album={a} />
                    <button onClick={() => { return favAlbumsListPop(a) }}>Delete from favourites</button>
                </div>
            )) : <h1>No hay favs</h1>}
        </div>
    )
}

export default Favoritos