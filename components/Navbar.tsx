import { ThemeToggle } from "./ThemeToggle"

function Navbar() {
	return (
		<nav className="flex items-center justify-between py-4 flex-row-reverse">
			<ThemeToggle />
		</nav>
	)
}

export default Navbar
