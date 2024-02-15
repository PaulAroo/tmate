import { Children } from "react"

export const Each = <T,>({
	of,
	render,
}: {
	of: Array<T>
	render: (item: T) => JSX.Element
}) => Children.toArray(of.map((item) => render(item)))
