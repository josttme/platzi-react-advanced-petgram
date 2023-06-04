import { useContext, useEffect, useState } from 'react'
import { Context } from '../context/context'
import { useNavigate } from 'react-router-dom'

export const useAuthentication = () => {
	const navigate = useNavigate()
	const { activeAuth, setUserName } = useContext(Context)
	const [loginUsername, setLoginUsername] = useState('')
	const [registerUsername, setRegisterUsername] = useState('')
	const [errorLogin, setErrorLogin] = useState('')
	const [errorRegister, setErrorRegister] = useState('')
	const [shouldLogin, setShouldLogin] = useState(false)
	const [shouldRedirect, setShouldRedirect] = useState(false)

	const users = getUsersFromLocalStorage()
	const userNames = users?.map((user) => user.username)

	function getUsersFromLocalStorage() {
		return JSON.parse(localStorage.getItem('usernames')) || []
	}

	const handleLogin = () => {
		try {
			validateUsername(loginUsername)
			const user = users.find(
				(user) => user.username === loginUsername
			)
			if (user) {
				sessionStorage.setItem('currentUser', user.username)
				activeAuth(user.username)
				setUserName(user.username)
				setShouldRedirect(true)
			} else {
				setErrorLogin('El usuario no existe')
			}
		} catch (error) {
			setErrorLogin(error.message)
		}
	}

	const handleRegister = (e) => {
		e.preventDefault()
		e.preventDefault()

		try {
			validateUsername(registerUsername)
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
				localStorage.setItem(
					'usernames',
					JSON.stringify(updatedUsers)
				)
				sessionStorage.setItem('currentUser', registerUsername)
				activeAuth(registerUsername)
				setUserName(registerUsername)
				setShouldRedirect(true)
			}
		} catch (error) {
			setErrorRegister(error.message)
		}
	}
	const validateUsername = (username) => {
		if (!username.trim()) {
			throw new Error('Por favor, ingresa un nombre de usuario')
		}
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		setShouldLogin(true)
	}

	const handleInputChange = (e, setter) => {
		const value = e.target.value
			.slice(0, 30)
			.replace(/[^a-zA-Z0-9ñÑ\s]/g, '')
		setter(value)
	}

	const handleChangeLogin = (e) => {
		handleInputChange(e, setLoginUsername)
	}

	const handleChangeRegister = (e) => {
		handleInputChange(e, setRegisterUsername)
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

		const currentUser = sessionStorage.getItem('currentUser')
		if (currentUser && shouldRedirect) {
			navigate('/')
		}
	}, [shouldLogin, shouldRedirect])

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
