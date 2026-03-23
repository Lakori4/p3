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

    const favAlbumsListPush = (item: Album) => {
        if (!favAlbumsList.includes(item)) {
            setFavAlbumList([...favAlbumsList, item])
        } else {
            console.log("ya está el album")
        }
    }
    const favAlbumsListPop = (item: Album) => { setFavAlbumList(favAlbumsList.filter(e => e.collectionId !== item.collectionId)) }

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