import { Dispatch, SetStateAction } from "react"

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"
import { Task } from "@/lib/types"
import { EditTaskForm } from "../forms/EditTaskForm"

export function EditTask({
	open,
	setOpen,
	task,
}: {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
	task: Task
}) {
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle className="text-left">Edit task</DialogTitle>
				</DialogHeader>
				<EditTaskForm closeDialog={() => setOpen(false)} task={task} />
			</DialogContent>
		</Dialog>
	)
}
