"use client"

import { useState } from "react"

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { NewTaskForm } from "./NewTaskForm"
import { Button } from "@/components/ui/button"

export function AddTask() {
	const [open, setOpen] = useState(false)

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="outline">Add Task</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle className="text-left">Add a new task</DialogTitle>
				</DialogHeader>
				<NewTaskForm closeDialog={() => setOpen(false)} />
			</DialogContent>
		</Dialog>
	)
}
