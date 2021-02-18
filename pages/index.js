import Layout from "../components/Layout";
import classes from "../styles/main.module.scss"

export default function Main() {
  return <Layout>
    <div className={classes.mainPage}>
      <h1 className={classes.mainPage__title}>Next JS Application</h1>
    </div>
  </Layout>
}
