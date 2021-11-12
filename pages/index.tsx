import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

import Image from 'next/image';

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className={styles.hero} >
        <Image src={"/photo-1620050649633-1f9a8c981346.jpeg?ar=12:9&fit=crop"} width={1200} height={900} layout="responsive"/>
      </div>

      <section className={utilStyles.headingMd}>
        <h1 className={styles.h1} >タイトル</h1>
        <Image src={"/photo-1620050649633-1f9a8c981346.jpeg?ar=1:1&fit=crop"} width={200} height={200} layout="fixed"/>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

      <div className={styles.cssgrid}>
        <div>
            <h3>アイテム1</h3>
            <Image src={"/photo-1620050649633-1f9a8c981346.jpeg?ar=3:2&fit=crop"} width={600} height={400} layout="responsive"/>
            <p>適当なテキストメッセージ。適当なテキストメッセージ。適当なテキストメッセージ。適当なテキストメッセージ。適当なテキストメッセージ。適当なテキストメッセージ。適当なテキストメッセージ。適当なテキストメッセージ。適当なテキストメッセージ。</p>
        </div>
        <div className={styles.item1}>
            <h3>アイテム2</h3>
            <Image src={"/photo-1620050649633-1f9a8c981346.jpeg?ar=3:2&fit=crop"} width={600} height={400} layout="responsive"/>
            <p>適当なテキストメッセージ。</p>
        </div>
        <div className={styles.item1}>
            <h3>アイテム3</h3>
            <Image src={"/photo-1620050649633-1f9a8c981346.jpeg?ar=3:2&fit=crop"} width={600} height={400} layout="responsive"/>
            <p>適当なテキストメッセージ。</p>
        </div>
        <div className={styles.item1}>
            <h3>アイテム4</h3>
            <Image src={"/photo-1620050649633-1f9a8c981346.jpeg?ar=3:2&fit=crop"} width={600} height={400} layout="responsive"/>
            <p>適当なテキストメッセージ。</p>
        </div>
        <div className={styles.item1}>
            <h3>アイテム5</h3>
            <Image src={"/photo-1620050649633-1f9a8c981346.jpeg?ar=3:2&fit=crop"} width={600} height={400} layout="responsive"/>
            <p>適当なテキストメッセージ。</p>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}