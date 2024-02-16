"use client"

import { Table } from "@tanstack/react-table"
import { Cross2Icon } from "@radix-ui/react-icons"

import { AddTask } from "./AddTask"
import { statuses } from "@/lib/table-data"
import { Button } from "@/components/ui/button"
import { DataTableFacetedFilter } from "./DataTableFacetedFilter"
import { DataTableViewOptions } from "./DataTableViewOptions"

interface DataTableToolbarProps<TData> {
	table: Table<TData>
}

export function DataTableToolbar<TData>({
	table,
}: DataTableToolbarProps<TData>) {
	const isFiltered = table.getState().columnFilters.length > 0

	return (
		<div className="flex items-start sm:items-end justify-between">
			<div className="flex flex-1 flex-wrap items-center gap-2">
				{table.getColumn("status") && (
					<DataTableFacetedFilter
						column={table.getColumn("status")}
						title="Filter by status"
						options={statuses}
					/>
				)}
				<DataTableViewOptions table={table} />
				{isFiltered && (
					<Button
						variant="ghost"
						onClick={() => table.resetColumnFilters()}
						className="h-8 px-2 lg:px-3"
					>
						Reset
						<Cross2Icon className="ml-2 h-4 w-4" />
					</Button>
				)}
			</div>
			<AddTask />
		</div>
	)
}
