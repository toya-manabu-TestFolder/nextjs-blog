import Layout from "/home/toya_manabu/src/github.com/toya-manabu-TestFolder/nextjs-blog/components/layout";
import Head from "next/head";
import Link from "next/link";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>最初の投稿</title>
      </Head>
      <h1>はじめての投稿</h1>
      <h2>
        <Link href="/">トップページに戻る</Link>
      </h2>
    </Layout>
  );
}
