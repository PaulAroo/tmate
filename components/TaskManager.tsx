"use client"

import { useTaskStore } from "@/lib/store"
import { DataTable } from "./DataTable"
import { columns } from "./columns"

export function TaskManager() {
	const tasks = useTaskStore((state) => state.tasks)

	return (
		<section>
			<DataTable columns={columns} data={tasks} />
		</section>
	)
}
