import { PropTypes } from 'prop-types'
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Context = createContext()

export function ContextProvider({ children }) {
	const navigate = useNavigate()
	const [isAuth, setIsAuth] = useState(() => {
		return !!sessionStorage.getItem('currentUser')
	})

	const activeAuth = (token) => {
		sessionStorage.setItem('token', token)
		setIsAuth(true)
	}
	useEffect(() => {
		isAuth && navigate('/favorites')
	}, [isAuth])

	const valueContext = {
		isAuth,
		activeAuth
	}

	return (
		<Context.Provider value={valueContext}>
			{children}
		</Context.Provider>
	)
}
ContextProvider.propTypes = {
	children: PropTypes.node.isRequired
}
