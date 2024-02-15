import Link from "next/link"
import { IconProps } from "@radix-ui/react-icons/dist/types"
import { ForwardRefExoticComponent, RefAttributes } from "react"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

import { Each } from "./Each"

export default function Footer() {
	return (
		<footer className="flex mt-10 py-8 justify-center items-center gap-6 select-none">
			<p className="text-[#808080]">&copy; Paul Aromolaran</p>
			<div className="flex gap-3">
				<Each<Social>
					of={SOCIALS}
					render={(social) => (
						<Link href={social.link} target="_blank">
							<social.icon className="w-5 h-5 opacity-50 hover:opacity-100 hover:scale-105 transition-all" />
						</Link>
					)}
				/>
			</div>
		</footer>
	)
}

interface Social {
	link: string
	icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
}

const SOCIALS: Array<Social> = [
	{
		link: "https://github.com/paulAroo",
		icon: GitHubLogoIcon,
	},
	{
		link: "https://www.linkedin.com/in/paularoo/",
		icon: LinkedInLogoIcon,
	},
]
