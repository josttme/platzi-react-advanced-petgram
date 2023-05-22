import { PostCard } from '../components/PostCard'
import { useListOfPhotoCards } from '../hooks/useListOfPhotoCards'

export function Home() {
	const { loading, error, photos } = useListOfPhotoCards(null)
	if (loading) return 'Cargando...'
	if (error) return `Error: ${error.message}`

	return (
		<div className="py-10">
			{photos.map((photo) => (
				<PostCard key={photo.id} {...photo} />
			))}
		</div>
	)
}
