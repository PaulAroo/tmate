import { Task } from "./types"

export const seedTasks: Array<Task> = [
	{
		id: "1",
		title: "contact sales",
		description: "let the sales team know about the ongoing challenge",
		status: "PENDING",
		due_date: new Date(Date.now() - 40000000000),
	},
	{
		id: "2",
		title: "render tasks",
		description: "figure out a way to render task cards in a fancy way",
		status: "IN_PROGRESS",
		due_date: new Date(Date.now() - 10000000000),
	},
	// {
	// 	id: "3",
	// 	title: "contact sales",
	// 	description: "let the sales team know about the ongoing challenge",
	// 	status: "PENDING",
	// 	due_date: new Date(Date.now() - 40000000000)
	// },
	// {
	// 	id: "4",
	// 	title: "contact sales",
	// 	description: "let the sales team know about the ongoing challenge",
	// 	status: "PENDING",
	// 	due_date: new Date(Date.now() - 40000000000)
	// },
]
