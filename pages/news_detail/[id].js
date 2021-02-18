import Router from "next/router";
import {useState, useEffect} from 'react'
import Layout from "../../components/Layout";
import classes from "../../styles/news_detail.module.scss"


export default function Post ({post: serverPost}) {
  const [post, setPost] = useState(serverPost)
  useEffect ( () => {
    async function load() {
      const response = await fetch(`http://localhost:3004/news/${Router.router.query.id}`);
      const data = await response.json();
      setPost(data)
    }

    if (!serverPost) {
      load()
    }
  }, [])

  const linkBackHandler = () => {
    Router.back()
  }

  return <Layout>
    <div className={classes.newsDetail}>
      {post ? <>
            <a className={classes.newsDetail__link} onClick={linkBackHandler}>Go back</a>
            <h1 className={classes.newsDetail__title}>{post.title}</h1>
            <p className={classes.newsDetail__item}>{post.note}</p>
          </>
          : <p className={classes.newsDetail__title}>Please wait...</p>}
    </div>
  </Layout>
}

Post.getInitialProps = async (ctx) => {

  if (!ctx.req) {
    return {post: null}
  }

  const response = await fetch(`http://localhost:3004/news/${ctx.query.id}`);
  const post = await response.json();
  return {post}
}
