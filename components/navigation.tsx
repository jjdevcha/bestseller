"use client"

import Link from "next/link"
import styles from "./navigation.module.css"

export default function Navigation() {
	return (
		<nav className={styles.nav}>
			<ul className={styles.ul}>
				<li className={styles.li}>
					<Link href="/">Home</Link>
				</li>
				<li className={styles.li}>
					<Link href="/about">About</Link>
				</li>
			</ul>
		</nav>
	)
}
