import { useContext } from 'react'
import { Context } from '../context/context'

export function User() {
	const { userName, setIsAuth } = useContext(Context)

	const handleLogout = () => {
		setIsAuth(false)
		sessionStorage.removeItem('currentUser')
	}

	const handleDeleteUser = () => {
		const users = JSON.parse(localStorage.getItem('usernames')) || []
		const updatedUsers = users.filter(
			(user) => user.username !== userName
		)
		localStorage.setItem('usernames', JSON.stringify(updatedUsers))
		setIsAuth(false)
		sessionStorage.removeItem('currentUser')
	}

	return (
		<>
			<div>Hola! {userName}</div>
			<button
				type="button"
				onClick={handleLogout}
				className="text-md block rounded bg-gray-700 px-5 py-3 text-gray-100 transition hover:bg-gray-600"
			>
				Cerrar Sesión
			</button>
			<button
				type="button"
				onClick={handleDeleteUser}
				className="text-md mt-3 block rounded bg-red-700 px-5 py-3 text-gray-100 transition hover:bg-red-600"
			>
				Eliminar Usuario
			</button>
		</>
	)
}
