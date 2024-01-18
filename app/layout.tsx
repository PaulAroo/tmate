import type { Metadata } from "next"
import { Nunito } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "TMate",
	description: "task management dashboard",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={nunito.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
