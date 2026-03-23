import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1>"Pagina Principal"</h1>

      <div>
        <button type="button">"Pagina favoritos"</button>
        <button type="button">"Pagina buscar</button>
      </div>

    </div>
  );
}
