import { notFound } from "next/navigation";
import { getAlbumById } from "@/lib/api";
import AlbumCardDetail from "@/components/AlbumCardDetail";


type PageProps = {
    params: Promise<{ id: string }>;
}

export default async function AlbumSearchPageDetail({ params }: PageProps) {
    const { id } = await params;
    const album = await getAlbumById(id);

    if (!album) {
        notFound();
    }

    return <AlbumCardDetail album={album} />;

} 