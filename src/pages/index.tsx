import Head from "next/head";
import Layout, { siteTitle } from "components/layout";
import utilStyles from "/home/toya_manabu/src/github.com/toya-manabu-TestFolder/nextjs-blog/src/styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>私です</p>
      </section>
    </Layout>
  );
}
