import { useContext } from 'react'
import { Context } from '../context/context'
import { PostCard } from '../components/PostCard'

export function Favorites() {
	const { userName, favoritos } = useContext(Context)
	const userIndex = favoritos.findIndex(
		(user) => user.username === userName
	)
	const userFavorites = favoritos[userIndex]?.favorites
	return (
		<div className=" lg:h-[101vh]">
			<h2 className="pt-5 text-center text-2xl font-bold text-white/90 ">
				Mis Favoritos
			</h2>
			{userFavorites?.map((photo) => (
				<PostCard key={photo.id} {...photo} isFavorite={true} />
			))}
		</div>
	)
}
