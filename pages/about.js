import About from "@/src/components/about/about";
import Head from "next/head";

export default function about({ certificates }) {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <About certificates={certificates} />
    </>
  );
}
export async function getStaticProps() {
  const res = await import("./data/data.json");
  const { certificates } = res;
  return {
    props: { certificates },
  };
}
