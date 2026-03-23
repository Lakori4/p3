import { useMusic } from "@/context/MusicContext"



const Favoritos = () => {


    const { favAlbumsList, favAlbumsListPop } = useMusic();



    return (
        <div>
            {favAlbumsList.map(a => (
                <div className="albumCard">
                    <img src={a.trackViewUrl} alt={a.trackName} />
                    <h3>{a.trackName}</h3>
                    <h4>{a.artistName}</h4>
                </div>
            ))}
        </div>
    )
}