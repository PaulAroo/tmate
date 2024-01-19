import Image from "next/image"
import logo from "@/assets/logo.png"
import { ThemeToggle } from "./ThemeToggle"

function Navbar() {
	return (
		<nav className="flex items-center justify-between py-4">
			<div className="flex gap-1 items-center">
				<Image
					src={logo}
					placeholder="blur"
					alt="teach mate AI logo"
					className="w-8 h-8"
				/>
				<h1 className="text-2xl opacity-70">TeachMateAI</h1>
			</div>
			<ThemeToggle />
		</nav>
	)
}

export default Navbar
