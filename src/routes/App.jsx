import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { Home } from '../pages/Home'
import { Users } from '../pages/Users'
export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="users" element={<Users />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
