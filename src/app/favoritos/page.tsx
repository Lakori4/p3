import AlbumCard from "@/components/AlbumComponent";
import { useMusic } from "@/context/MusicContext"



const Favoritos = () => {


    const { favAlbumsList, favAlbumsListPop } = useMusic();

    return (
        <div>
            {favAlbumsList.map(a => (
                <div>
                    <AlbumCard album={a} />
                    <button onClick={() => { return favAlbumsListPop(a) }}>Delete from favourites</button>
                </div>
            ))}
        </div>
    )
}

export default Favoritos