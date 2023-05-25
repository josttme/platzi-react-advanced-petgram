import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { Home } from '../pages/Home'
import { Users } from '../pages/Users'
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	HttpLink,
	ApolloLink,
	concat
} from '@apollo/client'
import { Profiles } from '../pages/Profiles'
import { ContextProvider } from '../context/context'
import { User } from '../pages/User'
import { Favorites } from '../pages/Favorites'
import { PrivateRoute } from '../pages/PrivateRoute'
import { NotRegistedUser } from '../pages/NotRegistedUser'

const httpLink = new HttpLink({
	/* uri: 'https://server-petgram-josttme.vercel.app/graphql' */
	uri: 'https://petgram-bramuccci.vercel.app/graphql'
})

const authMiddleware = new ApolloLink((operation, forward) => {
	const token = window.sessionStorage.getItem('token')
	const authorization = token ? `Bearer ${token}` : ''
	operation.setContext({
		headers: {
			authorization
		}
	})

	return forward(operation)
})

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: concat(authMiddleware, httpLink)
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
