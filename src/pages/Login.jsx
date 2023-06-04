/* import { useContext, useEffect, useState } from 'react'
import { Context } from '../context/context'

function Login() {
	const { activeAuth, setUserName } = useContext(Context)
	const [loginUsername, setLoginUsername] = useState('')
	const [registerUsername, setRegisterUsername] = useState('')
	const [error, setError] = useState('')
	const [shouldLogin, setShouldLogin] = useState(false)
	const users = JSON.parse(localStorage.getItem('usernames')) || []
	const userNames = users?.map((user) => user.username)

	const handleLogin = () => {
		const usernames =
			JSON.parse(localStorage.getItem('usernames')) || []
		const user = usernames.find(
			(user) => user.username === loginUsername
		)

		if (user) {
			sessionStorage.setItem('currentUser', user.username)
			console.log('Inicio de sesión exitoso')
			activeAuth(user.username)
			setUserName(user.username)
		} else {
			setError('El usuario no existe')
		}
	}

	const handleRegister = (e) => {
		e.preventDefault()
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
			sessionStorage.setItem('currentUser', registerUsername)
			console.log('Registro exitoso')
			activeAuth(registerUsername)
			setUserName(registerUsername)
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setShouldLogin(true)
	}

	const handleChangeLogin = (e) => {
		setLoginUsername(e.target.value)
	}

	const handleChangeRegister = (e) => {
		setRegisterUsername(e.target.value)
	}

	const handleLoginExist = (user) => () => {
		setLoginUsername(user)
		setShouldLogin(true)
	}

	useEffect(() => {
		if (shouldLogin) {
			handleLogin()
			setShouldLogin(false)
		}
	}, [shouldLogin])

	return (
		<div>
			<h2>Iniciar sesión</h2>
			<form onSubmit={handleSubmit}>
				<input
					className="bg-blue-600 p-2"
					type="text"
					value={loginUsername}
					onChange={handleChangeLogin}
					placeholder="Nombre de usuario"
				/>
				<button type="submit">Iniciar sesión</button>
			</form>

			<h2>Registrarse</h2>
			<form onSubmit={handleRegister}>
				<input
					className="bg-blue-600 p-2"
					type="text"
					value={registerUsername}
					onChange={handleChangeRegister}
					placeholder="Nombre de usuario"
				/>
				<button type="submit">Registrarse</button>
			</form>

			{error && <p>{error}</p>}

			<div className="mx-auto flex w-11/12 flex-wrap gap-2 ">
				{userNames?.map((user) => (
					<button
						type="button"
						key={user}
						onClick={handleLoginExist(user)}
					>
						{user}
					</button>
				))}
			</div>
		</div>
	)
}

export default Login
 */
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/context'
import Formulario from './Formulario'
import ListaUsuarios from './ListaUsuarios'

function Login() {
	const { activeAuth, setUserName } = useContext(Context)
	const [loginUsername, setLoginUsername] = useState('')
	const [registerUsername, setRegisterUsername] = useState('')
	const [error, setError] = useState('')
	const [shouldLogin, setShouldLogin] = useState(false)
	const users = JSON.parse(localStorage.getItem('usernames')) || []
	const userNames = users?.map((user) => user.username)

	const handleLogin = () => {
		const usernames =
			JSON.parse(localStorage.getItem('usernames')) || []
		const user = usernames.find(
			(user) => user.username === loginUsername
		)

		if (user) {
			sessionStorage.setItem('currentUser', user.username)
			console.log('Inicio de sesión exitoso')
			activeAuth(user.username)
			setUserName(user.username)
		} else {
			setError('El usuario no existe')
		}
	}

	const handleRegister = (e) => {
		e.preventDefault()
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
			sessionStorage.setItem('currentUser', registerUsername)
			console.log('Registro exitoso')
			activeAuth(registerUsername)
			setUserName(registerUsername)
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setShouldLogin(true)
	}

	const handleChangeLogin = (e) => {
		setLoginUsername(e.target.value)
	}

	const handleChangeRegister = (e) => {
		setRegisterUsername(e.target.value)
	}

	const handleLoginExist = (user) => () => {
		setLoginUsername(user)
		setShouldLogin(true)
	}

	useEffect(() => {
		if (shouldLogin) {
			handleLogin()
			setShouldLogin(false)
		}
	}, [shouldLogin])

	return (
		<div>
			<Formulario
				onSubmit={handleSubmit}
				value={loginUsername}
				onChange={handleChangeLogin}
				placeholder="Nombre de usuario"
				title="Iniciar sesión"
				error={error}
			/>

			<Formulario
				onSubmit={handleRegister}
				value={registerUsername}
				onChange={handleChangeRegister}
				placeholder="Nombre de usuario"
				title="Registrarse"
				error={error}
			/>

			<ListaUsuarios
				userNames={userNames}
				onUserClick={handleLoginExist}
			/>
		</div>
	)
}

export default Login
