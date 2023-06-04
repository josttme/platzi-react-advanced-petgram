import { PropTypes } from 'prop-types'

export function UserList({ userNames, onUserClick }) {
	if (userNames && userNames.length === 0) return
	return (
		<div className="mx-auto flex w-11/12 flex-col items-center justify-center gap-4 ">
			<h2 className="text-2xl font-bold">Selecciona un usuario</h2>
			<div className="flex flex-wrap gap-2">
				{userNames?.map((user) => (
					<button
						className=" rounded-3xl bg-blue-800 px-4 py-2 text-lg  text-white hover:bg-blue-700"
						type="button"
						key={user}
						onClick={onUserClick(user)}
					>
						{user}
					</button>
				))}
			</div>
		</div>
	)
}
UserList.propTypes = {
	userNames: PropTypes.array.isRequired,
	onUserClick: PropTypes.func.isRequired
}
