import { create } from "zustand"
import { v4 as uuid } from "uuid"
import { createJSONStorage, persist } from "zustand/middleware"

import { storage } from "../lib/storage"
import { seedTasks } from "../lib/seed-data"
import { Actions, State } from "./types"

export const useTaskStore = create<State & Actions>()(
	persist(
		(set) => ({
			tasks: seedTasks,
			hasHydrated: false,
			setHasHydrated: (state) => {
				set({
					hasHydrated: state,
				})
			},
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
			deleteTask: (id) => {
				set((state) => ({
					tasks: state.tasks.filter((task) => task.id !== id),
				}))
			},
		}),
		{
			name: "task-store",
			skipHydration: true,
			storage: createJSONStorage(() => storage),
			onRehydrateStorage: (state) => {
				state.setHasHydrated(true)
			},
		}
	)
)
