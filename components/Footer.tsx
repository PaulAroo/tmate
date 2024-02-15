import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export default function Footer() {
	return (
		<footer className="flex mt-10 py-8 justify-center items-center gap-6 select-none">
			<p className="text-[#808080]">&copy; Paul Aromolaran</p>
			<div className="flex gap-3">
				<Link href="https://github.com/paulAroo" target="_blank">
					<GitHubLogoIcon className="w-5 h-5 opacity-50 hover:opacity-100 hover:scale-105 transition-all" />
				</Link>
				<Link href="https://www.linkedin.com/in/paularoo/" target="_blank">
					<LinkedInLogoIcon className="w-5 h-5 opacity-50 hover:opacity-100 hover:scale-105 transition-all" />
				</Link>
			</div>
		</footer>
	)
}
