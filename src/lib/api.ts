import axios from "axios";
import { time } from "console";
import {AlbumResponse,Album} from "../lib/types"


const api = axios.create({
    baseURL: "https://itunes.apple.com/",
    timeout: 10000
});

async function search(endpoint: string):Promise<Album[]> {
    try {
        const response = await api.get<AlbumResponse>(endpoint)
        return response.data.results ?? []
    }catch (error){
            console.error("Error fetching data:", error);
            throw error;
        }
}

export async function searchAlbum (name:string): Promise <Album[]>{
    try{
        return search(`/search?term=${name.trim()}&entity=album&limit=20`)
    }catch (error){
            console.error("Error fetching data:", error);
            throw error;
        }
}
