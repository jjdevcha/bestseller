"use client"

import getListDetails from "@/components/book-details"
import Link from "next/link"
import { useParams } from "next/navigation"
import styles from "./page.module.css"

type ISBN = {
	isbn10: string
	isbn13: string
}

type BuyLink = {
	name: string
	url: string
}

type BookDetails = {
	rank: number
	rank_last_week: number
	weeks_on_list: number
	asterisk: number
	dagger: number
	primary_isbn10: string
	primary_isbn13: string
	publisher: string
	description: string
	price: string
	title: string
	author: string
	contributor: string
	contributor_note: string
	book_image: string
	book_image_width: number
	book_image_height: number
	amazon_product_url: string
	age_group: string
	book_review_link: string
	first_chapter_link: string
	sunday_review_link: string
	article_chapter_link: string
	isbns: ISBN[]
	buy_links: BuyLink[]
	book_uri: string
}

export default async function ListDetail() {
	const params = useParams<{ id: string }>()
	const listId = params.id

	const [listName, books] = await getListDetails(listId)

	return (
		<div className={styles.div}>
			<h1>{listName}</h1>
			<div className={styles.books_container}>
				{books.map((book: BookDetails) => (
					<div key={book.primary_isbn13} className={styles.book}>
						<img
							src={book.book_image}
							alt={book.title}
							className={styles.img}
						/>
						<div className={styles.detail_div}>
							<h2>{book.title}</h2>
							<h3>{book.author}</h3>
							<Link href={book.amazon_product_url}>
								<div className={styles.buy_button}>
									Buy now 👉
								</div>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
