
import { searchAlbum } from "@/lib/api";


type PageProps = {
    params: Promise<{ name: string }>;
}

export default async function AlbumSearchPageDetail({ params }: PageProps) {
    const { name } = await params;
    const album = searchAlbum(name);



}