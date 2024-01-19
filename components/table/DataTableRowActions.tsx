"use client"

import { useState } from "react"
import { Row } from "@tanstack/react-table"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Task } from "@/lib/types"
import { EditTask } from "./EditTask"
import { useTaskStore } from "@/lib/store"
import { Button } from "@/components/ui/button"

interface DataTableRowActionsProps<TData> {
	row: Row<TData>
}

export function DataTableRowActions<TData>({
	row,
}: DataTableRowActionsProps<TData>) {
	const task = row.original as Task
	const deleteTask = useTaskStore((state) => state.deleteTask)

	const [open, setOpen] = useState(false)

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="ghost"
						className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
					>
						<DotsHorizontalIcon className="h-4 w-4" />
						<span className="sr-only">Open menu</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-[100px]">
					<DropdownMenuItem className="p-0">
						<Button
							variant="ghost"
							className="justify-start py-0 px-2 w-full"
							onClick={() => setOpen(true)}
						>
							Edit
						</Button>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem className="p-0">
						<Button
							variant="ghost"
							className="justify-start py-0 px-2 w-full"
							onClick={() => deleteTask(task.id)}
						>
							Delete
						</Button>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
			{open ? (
				<EditTask open={open} setOpen={setOpen} task={task} />
			) : undefined}
		</>
	)
}
