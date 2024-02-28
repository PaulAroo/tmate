import { Trash2 } from "lucide-react"
import { Row } from "@tanstack/react-table"

import { Task } from "@/store/types"
import { useTaskStore } from "@/store"
import { Button } from "@/components/ui/button"

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface DataTableRowActionsProps {
	row: Row<Task>
}

export function DataTableRowActions({ row }: DataTableRowActionsProps) {
	const task = row.original
	const deleteTask = useTaskStore((state) => state.deleteTask)

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button size="icon" variant="ghost" className="text-muted-foreground">
					<Trash2 />
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently delete your
						task.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction asChild>
						<Button onClick={() => deleteTask(task.id)}>Delete</Button>
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
