import Link from "next/link"
import {useState, useEffect} from 'react'
import Layout from "../components/Layout";
import classes from "../styles/news.module.scss"

export default function News({news: serverNews}) {

  const [news, setNews] = useState(serverNews)
  useEffect(()=>{
    async function load() {
      const response = await fetch('http://localhost:3004/news');
      const data = await response.json();
      setNews(data)
    }

    if (!serverNews) {
      load()
    }
  })

  return <Layout title='News page | NextJs App'>
    <div className={classes.news}>
      {news ? <>
            <h1 className={classes.news__title}>News page</h1>
            <uL className={classes.news__list}>
              {news.map((el) => (
                  <li key={el.id} className={classes.news__item}><Link href={`/news_detail/${el.id}`}>{el.title}</Link></li>
              ))}
            </uL>
          </>
          : <p className={classes.news__title}>Please wait ...</p>
      }
    </div>
  </Layout>
}

News.getInitialProps = async ({req}) => {
  if (!req) {
    return {news: null}
  }
  const response = await fetch('http://localhost:3004/news');
  const news = await response.json();
  return {news}
}
