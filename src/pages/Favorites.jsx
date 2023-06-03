import { useContext } from 'react'
import { Context } from '../context/context'
import { PostCard } from '../components/PostCard'

export function Favorites() {
	const { userName, favoritos } = useContext(Context)
	const userIndex = favoritos.findIndex(
		(user) => user.username === userName
	)
	const userFavorites = favoritos[userIndex]?.favorites
	console.log(userFavorites)
	console.log(userName)
	return (
		<>
			<div>Favorites</div>
			<span>{userName}</span>
			<div className="py-10">
				{userFavorites?.map((photo) => (
					<PostCard key={photo.id} {...photo} isFavorite={true} />
				))}
			</div>
		</>
	)
}
