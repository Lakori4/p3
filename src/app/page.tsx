import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Pagina Principal</h1>

      <div>
        <Link href="/favoritos"><button type="button">Pagina favoritos</button></Link>
        <Link href="/albums"><button type="button">Pagina buscar</button></Link>
      </div>

    </div>
  );
}
