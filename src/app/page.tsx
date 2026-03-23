import "./page.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <h1>Pagina Principal</h1>
      <div>
        <Link href="/favoritos"><button type="button">Pagina favoritos</button></Link>
        <Link href="/albums"><button type="button">Pagina buscar</button></Link>
      </div>

    </div>
  );
}
