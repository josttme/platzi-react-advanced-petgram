import { useState } from 'react'

function Login() {
	const [loginUsername, setLoginUsername] = useState('')
	const [registerUsername, setRegisterUsername] = useState('')
	const [error, setError] = useState('')

	const handleLogin = () => {
		const usernames =
			JSON.parse(localStorage.getItem('usernames')) || []
		const user = usernames.find(
			(user) => user.username === loginUsername
		)

		if (user) {
			sessionStorage.setItem('currentUser', JSON.stringify(user))
			// Realizar la acción de inicio de sesión exitosa
			console.log('Inicio de sesión exitoso')
		} else {
			setError('El usuario no existe')
		}
	}
	const handleRegister = () => {
		const usernames =
			JSON.parse(localStorage.getItem('usernames')) || []
		const userExists = usernames.some(
			(user) => user.username === registerUsername
		)

		if (userExists) {
			setError('El usuario ya existe')
		} else {
			const newUser = {
				username: registerUsername,
				favorites: []
			}
			usernames.push(newUser)
			localStorage.setItem('usernames', JSON.stringify(usernames))
			sessionStorage.setItem('currentUser', registerUsername) // Almacenar solo el nombre de usuario
			// Realizar la acción de registro exitoso
			console.log('Registro exitoso')
		}
	}

	return (
		<div>
			<h2>Iniciar sesión</h2>
			<input
				className="bg-blue-600 p-2"
				type="text"
				value={loginUsername}
				onChange={(e) => setLoginUsername(e.target.value)}
				placeholder="Nombre de usuario"
			/>
			<button onClick={handleLogin}>Iniciar sesión</button>

			<h2>Registrarse</h2>
			<input
				className="bg-blue-600 p-2"
				type="text"
				value={registerUsername}
				onChange={(e) => setRegisterUsername(e.target.value)}
				placeholder="Nombre de usuario"
			/>
			<button onClick={handleRegister}>Registrarse</button>

			{error && <p>{error}</p>}
		</div>
	)
}

export default Login
