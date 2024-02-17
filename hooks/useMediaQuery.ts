import { useEffect, useState } from "react"

export function useMediaQuery(query: string) {
	const [value, setValue] = useState(false)

	useEffect(() => {
		function onChange(event: MediaQueryListEvent) {
			setValue(event.matches)
		}

		const mediaQueryList = matchMedia(query)
		mediaQueryList.addEventListener("change", onChange)
		setValue(mediaQueryList.matches)

		return () => mediaQueryList.removeEventListener("change", onChange)
	}, [query])

	return value
}
