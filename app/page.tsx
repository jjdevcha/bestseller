import Link from "next/link"
import styles from "./page.module.css"

export const metadata = {
	title: "Home",
}

const API_URL = "https://books-api.nomadcoders.workers.dev/lists"

async function getBookLists() {
	const response = await fetch(API_URL)
	const data = await response.json()
	return data.results
}

type BookList = {
	list_name: string
	display_name: string
	list_name_encoded: string
	oldest_published_date: string
	newest_published_date: string
	updated: "WEEKLY" | "MONTHLY"
}

export default async function Home() {
	const bookLists: BookList[] = await getBookLists()
	return (
		<div className={styles.div}>
			<h1 className={styles.h1}>
				The New York Times Best Seller Explorer
			</h1>
			<div className={styles.list_div}>
				{bookLists.map((list, i) => (
					<Link
						key={list.list_name_encoded}
						href={`/list/${list.list_name_encoded}`}>
						<div className={styles.list}>
							<h3>{list.display_name}</h3>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}
