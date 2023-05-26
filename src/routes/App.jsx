import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { Home } from '../pages/Home'
import { Users } from '../pages/Users'
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache
} from '@apollo/client'
import { Profiles } from '../pages/Profiles'
import { ContextProvider } from '../context/context'
import { User } from '../pages/User'
import { Favorites } from '../pages/Favorites'
import { PrivateRoute } from '../pages/PrivateRoute'
import { NotRegistedUser } from '../pages/NotRegistedUser'

const client = new ApolloClient({
	uri: 'https://server-petgram-josttme.vercel.app/graphql',
	cache: new InMemoryCache()
})

export function App() {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<ContextProvider>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Home />} />
							<Route path="/users" element={<Users />} />
							<Route path="/photos/:type" element={<Profiles />} />
							<Route path="/login" element={<NotRegistedUser />} />
							<Route
								path="/user"
								element={
									<PrivateRoute>
										<User />
									</PrivateRoute>
								}
							/>
							<Route
								path="/favorites"
								element={
									<PrivateRoute>
										<Favorites />
									</PrivateRoute>
								}
							/>
						</Route>
					</Routes>
				</ContextProvider>
			</BrowserRouter>
		</ApolloProvider>
	)
}
