import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { searchAlbum } from "@/lib/api";
import { useEffect, useState } from "react";
import { Album } from "@/lib/types";

type PageProps={
    params: Promise <{name:string}>;
}

export default async function AlbumSearchPageDetail({params}:PageProps) {
    const {name}=await params;
    const album = searchAlbum(name);

    
    
}