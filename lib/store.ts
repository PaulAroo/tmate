import { create } from "zustand"
import { v4 as uuid } from "uuid"

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
}

export type State = {
	tasks: Task[]
}

export type Actions = {
	addTask: (details: AddedTaskDetails) => void
	updateTask: (id: string, details: UpdatedTaskDetails) => void
}

export const useTaskStore = create<State & Actions>()((set) => ({
	tasks: [],
	addTask: (details) => {
		set((state) => ({
			tasks: [...state.tasks, { id: uuid(), status: "PENDING", ...details }],
		}))
	},
	updateTask: (id, details) => {
		set((state) => ({
			tasks: state.tasks.map((task) =>
				task.id === id ? { ...task, ...details } : task
			),
		}))
	},
}))
