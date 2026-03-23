"use client"

import { createContext, ReactNode, useCallback, useContext, useState } from "react";


type MusicContextType = {
    favAlbumList: string[],
    favAlbumsListPush: (item: string) => void,
    favAlbumsListPop: (item: string) => void,
}

const MusicContext = createContext<MusicContextType | null>(null);

export const MusicProvider = ({ children }: { children: ReactNode }) => {
    const [favAlbumList, setFavAlbumList] = useState<string[]>([])

    const favAlbumsListPush = (item: string) => { setFavAlbumList([...favAlbumList, item]) }
    const favAlbumsListPop = (item: string) => { setFavAlbumList(favAlbumList.filter(e => e !== item)) }

    return (
        <MusicContext.Provider value={{ favAlbumList, favAlbumsListPush, favAlbumsListPop }}>
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