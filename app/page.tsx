import { TaskManager } from "@/components/TaskManager"
import { ThemeToggle } from "@/components/ThemeToggle"

export default function Home() {
	return (
		<div className="container">
			<nav className="flex items-center justify-between py-6">
				<h1 className="text-2xl">Task Manager</h1>
				<ThemeToggle />
			</nav>
			<TaskManager />
		</div>
	)
}
