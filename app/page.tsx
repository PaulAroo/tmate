import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { TaskManager } from "@/components/TaskManager"

export default function Home() {
	return (
		<div className="container">
			<Navbar />
			<Header />
			<TaskManager />
			<Footer />
		</div>
	)
}
