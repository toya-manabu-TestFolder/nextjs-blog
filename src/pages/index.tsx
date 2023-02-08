import Head from "next/head";
import Layout, { siteTitle } from "components/layout";
import utilStyles from "/home/toya_manabu/src/github.com/toya-manabu-TestFolder/nextjs-blog/src/styles/utils.module.css";
import { getSortedPostsData } from "../../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: any) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(
            ({
              id,
              date,
              title,
            }: {
              id: number;
              date: string;
              title: string;
            }) => (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            )
          )}
        </ul>
        <p>私です</p>
      </section>
    </Layout>
  );
}
