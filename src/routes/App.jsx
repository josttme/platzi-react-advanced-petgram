import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { Home } from '../pages/Home'
import { Profiles } from '../pages/Profiles'
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache
} from '@apollo/client'
import { ContextProvider } from '../context/context'
import { User } from '../pages/User'
import { Favorites } from '../pages/Favorites'
import { PrivateRoute } from '../pages/PrivateRoute'
import { Login } from '../pages/Login'
import { Profile } from '../pages/Profile'

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
							<Route path="/profiles" element={<Profiles />} />
							<Route path="/login" element={<Login />} />
							<Route path="/photos/:type" element={<Profile />} />

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
