"use client"

import { useState } from "react"
import { PlusCircledIcon } from "@radix-ui/react-icons"

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { NewTaskForm } from "./forms/NewTaskForm"

export function AddTask() {
	const [open, setOpen] = useState(false)

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="outline" className="border-brand">
					<PlusCircledIcon className="mr-2 h-4 w-4" /> New Task
				</Button>
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
