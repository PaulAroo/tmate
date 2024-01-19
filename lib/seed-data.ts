import { Task } from "./types"
import { v4 as uuid } from "uuid"

export const seedTasks: Array<Task> = [
	{
		id: uuid(),
		title: "Generate Student Progress Reports",
		description:
			"Utilize the AI Report Writer tool to generate comprehensive student progress reports for the current academic term.",
		status: "PENDING",
		due_date: new Date(Date.now() + 1000000000),
	},
	{
		id: uuid(),
		title: "Create Engaging Classroom Activities",
		description:
			"Explore the Activity Ideas Generator to create a set of engaging and curriculum-aligned classroom activities for the upcoming week.",
		status: "IN_PROGRESS",
		due_date: new Date(Date.now() + 200000000),
	},
	{
		id: uuid(),
		title: "Design Math Starters for Tomorrow",
		description:
			"Access the Maths Starter Questions module to design a set of math starter questions for the next day's class, catering to the specific learning objectives.",
		status: "COMPLETED",
		due_date: new Date(Date.now() + 3000000000),
	},
	{
		id: uuid(),
		title: "Provide Feedback on AI-Generated Reports",
		description:
			"Review and provide feedback on the AI-generated student progress reports to ensure accuracy and customize them as needed.",
		status: "IN_PROGRESS",
		due_date: new Date(Date.now() + 400000000),
	},
	{
		id: uuid(),
		title: "Review Usage Analytics",
		description:
			"Periodically review usage analytics to identify trends in tool usage, understand popular features, and optimize teaching strategies accordingly.",
		status: "IN_PROGRESS",
		due_date: new Date(Date.now() + 500000000),
	},
	{
		id: uuid(),
		title: "Explore New Activity Ideas",
		description:
			"Regularly explore the Activity Ideas Generator for fresh and innovative ideas to enhance classroom engagement and student participation.",
		status: "IN_PROGRESS",
		due_date: new Date(Date.now() + 600000000),
	},
	{
		id: uuid(),
		title: "Attend AI Tools Training Session",
		description:
			"Participate in a training session to better understand the features and functionalities of the AI tools, ensuring effective utilization in the classroom.",
		status: "PENDING",
		due_date: new Date(Date.now() + 70000000000),
	},
	{
		id: uuid(),
		title: "Submit Bug Reports or Issues",
		description:
			"Report any issues or bugs encountered while using the AI tools to the technical support team, ensuring prompt resolution and a smooth user experience.",
		status: "PENDING",
		due_date: new Date(Date.now() + 30000000000),
	},
]
