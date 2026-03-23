"use client"

import { Album } from "@/lib/types";
import { createContext, ReactNode, useCallback, useContext, useState } from "react";


type MusicContextType = {
    favAlbumsList: Album[],
    favAlbumsListPush: (item: Album) => void,
    favAlbumsListPop: (item: Album) => void,
}

const MusicContext = createContext<MusicContextType | null>(null);

export const MusicProvider = ({ children }: { children: ReactNode }) => {
    const [favAlbumsList, setFavAlbumList] = useState<Album[]>([])

    const favAlbumsListPush = (item: Album) => { console.log("context", item); setFavAlbumList([...favAlbumsList, item]); console.log(favAlbumsList) }
    const favAlbumsListPop = (item: Album) => { setFavAlbumList(favAlbumsList.filter(e => e !== item)) }

    return (
        <MusicContext.Provider value={{ favAlbumsList, favAlbumsListPush, favAlbumsListPop }}>
            {children}
        </MusicContext.Provider>
    )
}

export const useMusic = () => {
    const context = useContext(MusicContext)
    if (!context) {
        throw new Error("Page out of context")
    }
    return context
}