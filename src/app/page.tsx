"use client"
import { useMusic } from "@/context/MusicContext";
import "./styles.css";
import Link from "next/link";

export default function Home() {

  const { favAlbumsList } = useMusic();

  return (
    <div className="home">
      <h1>Página Principal</h1>
      <div>
        <Link href="/albums"><button type="button">Pagina buscar</button></Link>
        <Link href="/favoritos"><button type="button">Pagina favoritos</button></Link>
      </div>
    </div>
  );
}
