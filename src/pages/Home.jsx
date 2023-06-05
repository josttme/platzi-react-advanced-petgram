import { useContext } from 'react'
import { PostCard } from '../components/PostCard'
import { useListOfPhotoCards } from '../hooks/useListOfPhotoCards'
import { Context } from '../context/context'
import { SkeletonPostCard } from '../components/SkeletonPostCard'

export function Home() {
	const { loading, error, photos } = useListOfPhotoCards(null)
	const { isFavorite } = useContext(Context)
	if (error) return `Error: ${error.message}`

	return (
		<>
			{loading ? (
				<SkeletonPostCard />
			) : (
				photos.map((photo) => (
					<PostCard
						key={photo.id}
						{...photo}
						isFavorite={isFavorite(photo)}
					/>
				))
			)}
		</>
	)
}
