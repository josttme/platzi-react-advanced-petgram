import { useParams } from 'react-router-dom'
import { useListOfPhotoCards } from '../hooks/useListOfPhotoCards'
import { PostCard } from '../components/PostCard'

export function Profiles() {
	const params = useParams()
	const id = params.type.slice(0).split('-')[1]
	const { loading, error, photos } = useListOfPhotoCards(id)
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
