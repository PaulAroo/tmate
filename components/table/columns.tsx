"use client"

import { format } from "date-fns"
import { ColumnDef } from "@tanstack/react-table"

import { Task } from "@/store/types"
import { TaskPreview } from "./TaskPreview"
import { statuses } from "@/lib/table-data"
import { DataTableRowActions } from "./DataTableRowActions"

export const columns: ColumnDef<Task>[] = [
	{
		accessorKey: "title",
		header: "Title",
		enableHiding: false,
		cell: ({ row }) => <TaskPreview row={row} />,
	},
	{
		accessorKey: "description",
		header: "Description",
		cell: ({ row }) => {
			return (
				<div className="flex space-x-2">
					<span className="max-w-[500px] truncate font-medium">
						{row.getValue("description")}
					</span>
				</div>
			)
		},
	},
	{
		accessorKey: "due_date",
		header: "Due date",
		cell: ({ row }) => {
			return (
				<div className="flex space-x-2">
					<span className="max-w-[500px] truncate font-medium">
						{format(row.getValue("due_date"), "PP")}
					</span>
				</div>
			)
		},
		sortingFn: "datetime",
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => {
			const status = statuses.find(
				(status) => status.value === row.getValue("status")
			)

			if (!status) {
				return null
			}

			return (
				<div className="flex w-[100px] items-center text-muted-foreground">
					{status.icon && (
						<status.icon
							className="mr-2 h-4 w-4"
							style={{ color: status.color }}
						/>
					)}
					<span>{status.label}</span>
				</div>
			)
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id))
		},
	},
	{
		id: "actions",
		cell: ({ row }) => <DataTableRowActions row={row} />,
	},
]
