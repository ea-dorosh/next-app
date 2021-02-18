import Head from 'next/head'
import Navigation from "../components/Navigation";

export default function Layout ({children, title = 'Next JS Application'}) {
  return <>
    <Head>
      <title>{title}</title>
    </Head>
    <Navigation/>
    <main>
      {children}
    </main>
  </>
}
