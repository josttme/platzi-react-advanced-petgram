import { gql, useQuery } from '@apollo/client'
import { Avatar } from '../components/Avatar'
import { SkeletonProfiles } from '../components/SkeletonProfiles'

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

export function Profiles() {
	const { loading, error, data } = useQuery(GET_CATEGORIES)
	if (error) return `Error: ${error.message}`

	return (
		<div className="flex flex-col gap-6 px-5 pt-10 lg:h-[101vh] lg:pl-10 lg:pt-16">
			{loading ? (
				<SkeletonProfiles />
			) : (
				data.categories.map((avatar) => (
					<Avatar key={avatar.id} {...avatar}></Avatar>
				))
			)}
		</div>
	)
}
