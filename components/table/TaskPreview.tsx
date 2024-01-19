import { format } from "date-fns"
import { Row } from "@tanstack/react-table"

import { Task } from "@/lib/types"
import { statuses } from "@/lib/table-data"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"

export function TaskPreview({ row }: { row: Row<Task> }) {
	const status = statuses.find(
		(status) => status.value === row.getValue("status")
	)!

	return (
		<Dialog>
			<DialogTrigger asChild>
				<button className="max-w-[500px] truncate font-medium p-4">
					{row.getValue("title")}
				</button>
			</DialogTrigger>
			<DialogContent className="pt-10">
				<h3 className="text-2xl">{row.original.title}</h3>
				<p className="text-muted-foreground">{row.original.description}</p>
				<div className="flex items-center gap-2 text-muted-foreground">
					<p className="text-sm">Due Date:</p>
					<p>{format(row.original.due_date, "PPPP")}</p>
				</div>
				<Badge className="w-fit ml-auto">
					{status.icon && (
						<status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
					)}
					<span>{status.label}</span>
				</Badge>
			</DialogContent>
		</Dialog>
	)
}
