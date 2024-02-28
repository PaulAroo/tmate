import { Trash2 } from "lucide-react"
import { Row } from "@tanstack/react-table"

import { Task } from "@/store/types"
import { useTaskStore } from "@/store"
import { Button } from "@/components/ui/button"

interface DataTableRowActionsProps<TData> {
	row: Row<TData>
}

export function DataTableRowActions<TData>({
	row,
}: DataTableRowActionsProps<TData>) {
	const task = row.original as Task
	const deleteTask = useTaskStore((state) => state.deleteTask)

	return (
		<Button
			size="icon"
			variant="ghost"
			className="text-muted-foreground"
			onClick={() => deleteTask(task.id)}
		>
			<Trash2 />
			<span className="sr-only">delete task</span>
		</Button>
	)
}
