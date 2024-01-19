"use client"

import { useEffect } from "react"

import { columns } from "./table/columns"
import { DataTable } from "./table/DataTable"
import { useTaskStore } from "@/lib/store"

export function TaskManager() {
	const tasks = useTaskStore((state) => state.tasks)

	useEffect(() => {
		useTaskStore.persist.rehydrate()
	}, [])

	return (
		<section>
			<DataTable columns={columns} data={tasks} />
		</section>
	)
}
