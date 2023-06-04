import { useContext, useEffect, useState } from 'react'
import { Context } from '../context/context'

export const useAuthentication = () => {
	const { activeAuth, setUserName } = useContext(Context)
	const [loginUsername, setLoginUsername] = useState('')
	const [registerUsername, setRegisterUsername] = useState('')
	const [errorLogin, setErrorLogin] = useState('')
	const [errorRegister, setErrorRegister] = useState('')
	const [shouldLogin, setShouldLogin] = useState(false)

	const users = getUsersFromLocalStorage()
	const userNames = users?.map((user) => user.username)

	function getUsersFromLocalStorage() {
		return JSON.parse(localStorage.getItem('usernames')) || []
	}

	const handleLogin = () => {
		const user = users.find((user) => user.username === loginUsername)

		if (user) {
			sessionStorage.setItem('currentUser', user.username)
			activeAuth(user.username)
			setUserName(user.username)
		} else {
			setErrorLogin('El usuario no existe')
		}
	}

	const handleRegister = (e) => {
		e.preventDefault()
		const userExists = users.some(
			(user) => user.username === registerUsername
		)

		if (userExists) {
			setErrorRegister('El usuario ya existe')
		} else {
			const newUser = {
				username: registerUsername,
				favorites: []
			}
			const updatedUsers = [...users, newUser]
			localStorage.setItem('usernames', JSON.stringify(updatedUsers))
			sessionStorage.setItem('currentUser', registerUsername)
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

	return {
		loginUsername,
		registerUsername,
		errorLogin,
		errorRegister,
		userNames,
		handleSubmit,
		handleChangeLogin,
		handleChangeRegister,
		handleLoginExist,
		handleRegister
	}
}
