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

const client = new ApolloClient({
	uri: 'https://server-petgram-josttme.vercel.app/graphql',
	cache: new InMemoryCache()
})
export function App() {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="/users" element={<Users />} />
						<Route path="/photos/:type" element={<Profiles />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ApolloProvider>
	)
}
