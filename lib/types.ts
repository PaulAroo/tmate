export type Status = "PENDING" | "IN_PROGRESS" | "COMPLETED"

export type Task = {
	id: string
	title: string
	description: string
	status: Status
	due_date: Date
}

interface AddedTaskDetails {
	title: string
	description: string
	due_date: Date
}
interface UpdatedTaskDetails {
	title: string
	status: Status
	due_date: Date
	description: string
}

export type State = {
	tasks: Task[]
}

export type Actions = {
	addTask: (details: AddedTaskDetails) => void
	updateTask: (id: string, details: UpdatedTaskDetails) => void
}
