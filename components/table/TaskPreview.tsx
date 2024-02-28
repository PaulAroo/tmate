"use client"

import { useState } from "react"
import { Row } from "@tanstack/react-table"

import {
	Dialog,
	DialogTitle,
	DialogHeader,
	DialogContent,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Task } from "@/store/types"
import { EditTaskForm } from "../forms/EditTaskForm"

export function TaskPreview({ row }: { row: Row<Task> }) {
	const [open, setOpen] = useState(false)

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<button className="max-w-[500px] truncate font-medium p-4">
					{row.getValue("title")}
				</button>
			</DialogTrigger>
			<DialogContent className="pt-10">
				<DialogHeader>
					<DialogTitle className="text-left">Preview</DialogTitle>
				</DialogHeader>
				<EditTaskForm closeDialog={() => setOpen(false)} task={row.original} />
			</DialogContent>
		</Dialog>
	)
}
