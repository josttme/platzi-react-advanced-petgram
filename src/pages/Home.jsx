import { useContext } from 'react'
import { PostCard } from '../components/PostCard'
import { useListOfPhotoCards } from '../hooks/useListOfPhotoCards'
import { Context } from '../context/context'

export function Home() {
	const { loading, error, photos } = useListOfPhotoCards(null)
	const { isFavorite } = useContext(Context)
	if (loading) return 'Cargando...'
	if (error) return `Error: ${error.message}`

	return (
		<div className="py-10">
			{photos.map((photo) => (
				<PostCard
					key={photo.id}
					{...photo}
					isFavorite={isFavorite(photo)}
				/>
			))}
		</div>
	)
}
