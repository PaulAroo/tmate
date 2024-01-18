import TaskManager from "@/components/TaskManager"
import { ModeToggle } from "@/components/ModeToggle"

export default function Home() {
	return (
		<div className="container">
			<nav className="flex items-center justify-between py-6">
				<h1 className="text-2xl">Task Manager</h1>
				<ModeToggle />
			</nav>
			<TaskManager />
		</div>
	)
}
