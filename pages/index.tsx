import type { NextPage } from "next";
import Head from "next/head";
import Cards from "../components/Cards";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="py-20">
        <Hero />
      </div>
      <Hero2 />
      <Cards />
    </div>
  );
};

export default Home;
