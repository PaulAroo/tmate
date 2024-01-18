import {
	CircleIcon,
	StopwatchIcon,
	CheckCircledIcon,
} from "@radix-ui/react-icons"

export const statuses = [
	{
		value: "PENDING",
		label: "Pending",
		icon: CircleIcon,
	},
	{
		value: "IN_PROGRESS",
		label: "In Progress",
		icon: StopwatchIcon,
	},
	{
		value: "COMPLETED",
		label: "Completed",
		icon: CheckCircledIcon,
	},
]
