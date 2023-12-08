import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../src/components/Hero";
import Analytics from "../src/components/Analytics";
import Newsletter from "../src/components/Newsletter";
import Cards from "../src/components/Cards";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>RainbowKit App</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
    </div>
  );
};

export default Home;