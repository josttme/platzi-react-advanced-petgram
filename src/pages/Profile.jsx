import { useParams } from 'react-router-dom'
import { useListOfPhotoCards } from '../hooks/useListOfPhotoCards'
import { PostCard } from '../components/PostCard'
import { useContext } from 'react'
import { Context } from '../context/context'

export function Profile() {
	const { isFavorite } = useContext(Context)
	const params = useParams()
	const id = params.type.slice(0).split('-')[1]
	const { loading, error, photos } = useListOfPhotoCards(id)
	if (loading) return 'Cargando...'
	if (error) return `Error: ${error.message}`

	return (
		<>
			{photos.map((photo) => (
				<PostCard
					key={photo.id}
					{...photo}
					isFavorite={isFavorite(photo)}
				/>
			))}
		</>
	)
}
