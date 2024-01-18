import { ModeToggle } from "@/components/ModeToggle"

export default function Home() {
	return (
		<>
			<nav className="flex justify-between">
				<h1>Task Management</h1>
				<ModeToggle />
			</nav>
			<main></main>
		</>
	)
}
