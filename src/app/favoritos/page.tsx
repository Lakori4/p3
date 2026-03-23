"use client"
import AlbumCard from "@/components/AlbumCardDetail";
import { useMusic } from "@/context/MusicContext"



const Favoritos = () => {


    const { favAlbumsList, favAlbumsListPop } = useMusic();

    console.log(favAlbumsList)

    return (
        <div>
            {favAlbumsList.map(a => (
                <div>
                    <AlbumCard key={a.collectionId} album={a} />
                    <button onClick={() => { return favAlbumsListPop(a) }}>Delete from favourites</button>
                </div>
            ))}
        </div>
    )
}

export default Favoritos