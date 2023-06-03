import { useContext, useEffect, useState } from 'react'
import { Context } from '../context/context'

function Login() {
	const { activeAuth, setUserName } = useContext(Context)
	const [loginUsername, setLoginUsername] = useState('')
	const [registerUsername, setRegisterUsername] = useState('')
	const [error, setError] = useState('')
	const [shouldLogin, setShouldLogin] = useState(false) // Nueva variable de estado
	const users = JSON.parse(localStorage.getItem('usernames')) || []
	const userNames = users?.map((user) => user.username)

	const handleLogin = () => {
		const usernames =
			JSON.parse(localStorage.getItem('usernames')) || []
		const user = usernames.find(
			(user) => user.username === loginUsername
		)
		if (user) {
			sessionStorage.setItem(
				'currentUser',
				JSON.stringify(user.username)
			)
			// Realizar la acción de inicio de sesión exitosa
			console.log('Inicio de sesión exitoso')
			activeAuth(user.username)
			setUserName(user.username)
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
			activeAuth(registerUsername)
			setUserName(registerUsername)
		}
	}

	// Nuevo efecto para controlar la llamada a handleLogin()
	useEffect(() => {
		if (shouldLogin) {
			handleLogin()
			setShouldLogin(false)
		}
	}, [shouldLogin])

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
			<button onClick={() => setShouldLogin(true)}>
				Iniciar sesión
			</button>

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
			<div className="mx-auto flex w-11/12 flex-wrap gap-2 ">
				{userNames?.map((user) => (
					<button
						key={user}
						onClick={() => {
							setLoginUsername(user)
							setShouldLogin(true) // Establecer shouldLogin en true
						}}
					>
						{user}
					</button>
				))}
			</div>
		</div>
	)
}

export default Login
