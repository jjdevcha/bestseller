const API_URL = "https://books-api.nomadcoders.workers.dev/list?name="

export default async function getListDetails(listId: string) {
	const response = await fetch(`${API_URL}${listId}`)
	const data = await response.json()
	return [data.results.display_name, data.results.books]
}
