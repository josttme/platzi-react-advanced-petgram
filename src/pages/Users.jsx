import { categories } from '../../backend/db.json'
import { Avatar } from '../components/Avatar'
export function Users() {
	console.log(categories)
	return (
		<div className="flex flex-col justify-center gap-6 px-5 pt-20">
			{categories.map((avatar) => (
				<Avatar key={avatar.id} {...avatar}></Avatar>
			))}
		</div>
	)
}
