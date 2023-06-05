import { useContext } from 'react'
import { Context } from '../context/context'

export function User() {
	const { userName, setIsAuth, setUserName } = useContext(Context)

	const handleLogout = () => {
		setIsAuth(false)
		sessionStorage.removeItem('currentUser')
		setUserName('')
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
		<section className="flex flex-col items-center justify-center gap-2">
			<h2 className="py-5 text-center text-2xl font-bold text-white/90">
				Hola! {userName}
			</h2>
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
		</section>
	)
}
