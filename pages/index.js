import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="description" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem nemo
          reprehenderit tenetur repellendus facere iure esse ex, aperiam sunt
          repellat, quis iusto voluptates? Porro qui eveniet quod ipsum fugiat
          similique!
        </p>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem nemo
          reprehenderit tenetur repellendus facere iure esse ex, aperiam sunt
          repellat, quis iusto voluptates? Porro qui eveniet quod ipsum fugiat
          similique!
        </p>

        <Link href="/ninjas" legacyBehavior>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
