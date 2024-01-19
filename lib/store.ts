import { create } from "zustand"
import { v4 as uuid } from "uuid"
import { persist } from "zustand/middleware"

import { seedTasks } from "./seed-data"
import { Actions, State } from "./types"

export const useTaskStore = create<State & Actions>()(
	persist(
		(set) => ({
			tasks: seedTasks,
			addTask: (details) => {
				set((state) => ({
					tasks: [
						...state.tasks,
						{ id: uuid(), status: "PENDING", ...details },
					],
				}))
			},
			updateTask: (id, details) => {
				set((state) => ({
					tasks: state.tasks.map((task) =>
						task.id === id ? { ...task, ...details } : task
					),
				}))
			},
		}),
		{ name: "task-store", skipHydration: true }
	)
)
