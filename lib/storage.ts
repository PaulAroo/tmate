import localForage from "localforage"
import { StateStorage } from "zustand/middleware"

localForage.config({
	name: "tmate",
	storeName: "task_store_2",
	description: "store a list of tasks",
})

export const storage: StateStorage = {
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
