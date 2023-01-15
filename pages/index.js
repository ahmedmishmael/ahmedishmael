import Head from "next/head";
import { Inter } from "@next/font/google";
import HomePage from "@/src/components/Home Page/HomePage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ahmed Ishmael | Frontend Web developer</title>
        <meta name="description" content="Ahmed Ishmael Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}
