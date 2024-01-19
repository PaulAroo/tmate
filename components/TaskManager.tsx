"use client"

import { useEffect } from "react"

import { columns } from "./columns"
import { DataTable } from "./DataTable"
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
