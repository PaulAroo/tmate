import { ThemeToggle } from "./ThemeToggle"

function Navbar() {
	return (
		<nav className="flex items-center justify-between py-4">
			<h1 className="text-2xl opacity-70">TeachMateAI</h1>
			<ThemeToggle />
		</nav>
	)
}

export default Navbar
