import { gql, useQuery } from '@apollo/client'
import { Avatar } from '../components/Avatar'

const GET_CATEGORIES = gql`
	query Categories {
		categories {
			cover
			emoji
			name
			id
			path
		}
	}
`

export function Users() {
	const { loading, error, data } = useQuery(GET_CATEGORIES)
	if (loading) return 'Cargando...'
	if (error) return `Error: ${error.message}`

	return (
		<div className="flex flex-col justify-center gap-6 px-5 pt-20">
			{data.categories.map((avatar) => (
				<Avatar key={avatar.id} {...avatar}></Avatar>
			))}
		</div>
	)
}
