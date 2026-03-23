import { notFound } from "next/navigation";
import { getAlbumbyId } from "@/lib/api";
import AlbumCardDetail from "@/components/AlbumCardDetail";


type PageProps = {
    params: Promise<{ id: string }>;
}

export default async function AlbumSearchPageDetail({ params }: PageProps) {
    const { id } = await params;
    const album = await getAlbumbyId(id);
    //console.log(album[0])

    if (!album) {
        notFound();
    }

    return <AlbumCardDetail album={album[0]} />;

} 