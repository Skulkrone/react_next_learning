import styles from "../styles/Home.module.css";
// import Link from "next/link";
// import Navbar from "../components/Navbar/Navbar";

import Head from "next/head";

export default function Home() {
  // const id = "article";

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next JS</title>
      </Head>
      {/* <Navbar></Navbar> */}
      <div className={styles.main}>
        <h1>HELLO NEXT JS !</h1>
        {/* <a href="https://google.com">Google</a>
      <Link legacyBehavior href={`/blog/${id}`}>
      <a>Blog</a>
    </Link> */}
      </div>
    </>
  );
}
