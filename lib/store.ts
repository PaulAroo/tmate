import { create } from "zustand"
import { v4 as uuid } from "uuid"
import { Actions, State } from "./types"
import { seedTasks } from "./seed-data"

export const useTaskStore = create<State & Actions>()((set) => ({
	tasks: seedTasks,
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
