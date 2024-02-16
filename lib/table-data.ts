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
		color: "#c65656",
	},
	{
		value: "IN_PROGRESS",
		label: "In Progress",
		icon: StopwatchIcon,
		color: "#fca311",
	},
	{
		value: "COMPLETED",
		label: "Completed",
		icon: CheckCircledIcon,
		color: "#008000",
	},
]
