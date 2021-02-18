import Link from "next/link";
import classes from "../styles/navigation.module.scss"

export default function Navigation() {
  return <nav className={classes.navigation}>
      <h2 className={classes.navigation__title}>Navigation</h2>
      <ul className={classes.navigation__list}>
        <li className={classes.navigation__item}><Link href="/"><a>Main</a></Link></li>
        <li className={classes.navigation__item}><Link href="/news"><a>News</a></Link></li>
      </ul>
    </nav>
}
