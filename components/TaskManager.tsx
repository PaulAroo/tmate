"use client"

import { useTaskStore } from "@/lib/store"
import { DataTable } from "./DataTable"
import { columns } from "./columns"

function TaskManager() {
	const tasks = useTaskStore((state) => state.tasks)

	return (
		<section>
			<h1>Tasks List</h1>
			<DataTable columns={columns} data={tasks} />
		</section>
	)
}

export default TaskManager
