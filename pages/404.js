import Layout from "../components/Layout";
import classes from "../styles/main.module.scss";

export default function ErrorPage() {
  return <Layout>
    <div className={classes.mainPage}>
      <h1 className={classes.mainPage__title}>This page couldn't found</h1>
    </div>
  </Layout>
}
