"use client"

import { useTaskStore } from "@/lib/store"
import { DataTable } from "./DataTable"
import { columns } from "./columns"
import { AddTask } from "./AddTask"

function TaskManager() {
	const tasks = useTaskStore((state) => state.tasks)

	return (
		<section>
			<div className="flex justify-between items-center pb-4">
				<h1>Tasks List</h1>
				<AddTask />
			</div>
			<DataTable columns={columns} data={tasks} />
		</section>
	)
}

export default TaskManager
