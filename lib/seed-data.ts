import { Task } from "../store/types"
import { v4 as uuid } from "uuid"

export const seedTasks: Array<Task> = [
	{
		id: uuid(),
		title: "Delete me",
		description: "task description goes here",
		status: "PENDING",
		due_date: new Date(Date.now() + 2000000000),
	},
	{
		id: uuid(),
		title: "Add a new task",
		description: "task description goes here",
		status: "PENDING",
		due_date: new Date(Date.now() + 1000000000),
	},
]
