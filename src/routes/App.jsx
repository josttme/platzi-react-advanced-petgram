import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { Home } from '../pages/Home'
import { Users } from '../pages/Users'
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache
} from '@apollo/client'

const client = new ApolloClient({
	uri: 'https://server-petgram-josttme.vercel.app/graphql',
	cache: new InMemoryCache() // En esta instancia de cache, GraphQL guarda nuestros queries.
})
export function App() {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="users" element={<Users />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ApolloProvider>
	)
}
