import { photos } from '../../backend/db.json'
import { PostCard } from '../components/PostCard'

export function Home() {
	return (
		<div className="py-10 ">
			{photos.map((photo) => (
				<PostCard key={photo.id} {...photo} />
			))}
		</div>
	)
}
