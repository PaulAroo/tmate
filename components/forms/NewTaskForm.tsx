"use client"

import * as z from "zod"
import { format, previousDay } from "date-fns"
import { useForm } from "react-hook-form"
import { CalendarIcon } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { useTaskStore } from "@/store"
import { Textarea } from "../ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"

const formSchema = z.object({
	title: z.string().min(3, {
		message: "Please provide a valid title",
	}),
	description: z.string().min(3, {
		message: "Please provide a valid description",
	}),
	due_date: z.date(),
})

export function NewTaskForm({ closeDialog }: { closeDialog: () => void }) {
	const addTask = useTaskStore((state) => state.addTask)
	const yesterday = new Date()
	yesterday.setDate(yesterday.getDate() - 1)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
			description: "",
			due_date: new Date(),
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		addTask(values)
		closeDialog()
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 grid">
				<FormField
					name="title"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>
							<FormControl>
								<Input placeholder="task title" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name="description"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Textarea
									placeholder="describe the details of this task"
									className="resize-none"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name="due_date"
					control={form.control}
					render={({ field }) => (
						<FormItem className="flex flex-col">
							<FormLabel>Due Date</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											variant={"outline"}
											className={cn(
												"w-[240px] pl-3 text-left font-normal",
												!field.value && "text-muted-foreground"
											)}
										>
											{field.value ? (
												format(field.value, "PPP")
											) : (
												<span>Pick a date</span>
											)}
											<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0" align="start">
									<Calendar
										mode="single"
										selected={field.value}
										onSelect={field.onChange}
										disabled={(date) => date < yesterday}
										initialFocus
									/>
								</PopoverContent>
							</Popover>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="mt-4 justify-self-end">
					Add
				</Button>
			</form>
		</Form>
	)
}
