import Link from "next/link"

function Header() {
	return (
		<header className="pt-3 pb-8">
			<h1 className="text-3xl lg:text-4xl capitalize">
				Task management dashboard
			</h1>
			<p className="opacity-60 max-w-[35rem]">
				A demonstration of a task management dashboard designed for{" "}
				<Link
					href="https://teachmateai.com/"
					target="_blank"
					className="underline hover:text-brand"
				>
					TeachMateAI
				</Link>
				, aimed at enhancing efficiency in task management.
			</p>
		</header>
	)
}

export default Header
