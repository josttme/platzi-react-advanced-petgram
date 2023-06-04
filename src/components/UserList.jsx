import { PropTypes } from 'prop-types'

export function UserList({ userNames, onUserClick }) {
	return (
		<div className="mx-auto flex w-11/12 flex-wrap gap-2 ">
			{userNames?.map((user) => (
				<button type="button" key={user} onClick={onUserClick(user)}>
					{user}
				</button>
			))}
		</div>
	)
}
UserList.propTypes = {
	userNames: PropTypes.array.isRequired,
	onUserClick: PropTypes.func.isRequired
}
