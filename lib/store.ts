import { create } from "zustand"
import { v4 as uuid } from "uuid"
import localForage from "localforage"
import { StateStorage, createJSONStorage, persist } from "zustand/middleware"

import { seedTasks } from "./seed-data"
import { Actions, State } from "./types"

localForage.config({
	name: "tmate",
	storeName: "task_store_1",
	description: "store a list of tasks",
})

const storage: StateStorage = {
	async getItem(name) {
		return await localForage.getItem(name)
	},
	async setItem(name, value) {
		await localForage.setItem(name, value)
	},
	async removeItem(name) {
		await localForage.removeItem(name)
	},
}

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
		}
	)
)
