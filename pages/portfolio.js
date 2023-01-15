import Portfolio from "@/src/components/Portfolio/Portfolio";
import Head from "next/head";

export default function services({ projects }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Portfolio projects={projects} />
    </>
  );
}
export async function getStaticProps() {
  const res = await import("./data/data.json");
  const { projects } = res;
  return {
    props: { projects },
  };
}
