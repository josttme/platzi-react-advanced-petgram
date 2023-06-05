import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
export function Avatar({ id, name, emoji, cover, path }) {
	return (
		<Link to={`${path}-${id}`}>
			<div className="flex items-center gap-4 space-x-2 ">
				<img
					className="h-16 w-16 rounded-full lg:h-20 lg:w-20"
					src={cover}
					alt={name}
				/>
				<p className="text-xl text-white/90 lg:text-2xl">
					{name} {emoji}
				</p>
			</div>
		</Link>
	)
}

Avatar.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	emoji: PropTypes.string.isRequired,
	cover: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired
}
