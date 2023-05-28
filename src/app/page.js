import Image from "next/image";
import Link from "next/link";
import Styles from "./styles.module.css";

export default function Home() {
  return (
    <div>
      <nav>
        <div className={Styles.navDiv}>
          <p className={Styles.navItem}>Wanna Know More About Me? 👉</p>
          <Link href="/about" className={Styles.navItem}>
            About Me
          </Link>
        </div>
      </nav>

      <main className={Styles.main}>
        <h1>Hello World</h1>
      </main>
    </div>
  );
}
