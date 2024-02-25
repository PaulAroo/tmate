"use client"

import { useEffect } from "react"

import Spinner from "./Spinner"
import { useTaskStore } from "@/store"
import { columns } from "./table/columns"
import { DataTable } from "./table/DataTable"

export function TaskManager() {
	const tasks = useTaskStore((state) => state.tasks)
	const hasHydrated = useTaskStore((state) => state.hasHydrated)

	useEffect(() => {
		useTaskStore.persist.rehydrate()
	}, [])

	if (!hasHydrated) {
		return <Spinner />
	}

	return (
		<section>
			<DataTable columns={columns} data={tasks} />
		</section>
	)
}
