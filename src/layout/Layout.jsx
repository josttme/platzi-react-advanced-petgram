import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'

export function Layout() {
	return (
		<section className="min-h-screen bg-primary py-16 text-white">
			<Header />
			<Outlet />
			<Navbar />
		</section>
	)
}
