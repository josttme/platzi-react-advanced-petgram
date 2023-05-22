import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
export function Avatar({ name, emoji, cover, path }) {
	return (
		<Link to={path}>
			<div className="flex items-center gap-4 space-x-2">
				<div>
					<img
						className="h-16 w-16 rounded-full"
						src={cover}
						alt={name}
					/>
				</div>
				<p className="text-xl  text-white/90">
					{' '}
					{name} {emoji}{' '}
				</p>
			</div>
		</Link>
	)
}

Avatar.propTypes = {
	name: PropTypes.string.isRequired,
	emoji: PropTypes.string.isRequired,
	cover: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired
}
