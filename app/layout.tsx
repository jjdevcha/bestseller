import Navigation from "@/components/navigation"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
	title: { template: "%s | Book Explorer", default: "Book Explorer" },
	description: "New York Times Best Sellers",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>
				<Navigation />
				{children}
			</body>
		</html>
	)
}
