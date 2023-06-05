import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'

export function Layout() {
	return (
		<section className="mx-auto min-h-screen max-w-2xl  bg-primary py-16 text-white">
			<Header />
			<Outlet />
			<Navbar />
		</section>
	)
}
