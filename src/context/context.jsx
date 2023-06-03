import { PropTypes } from 'prop-types'
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFavorites } from '../hooks/useFavorites'

export const Context = createContext()

export function ContextProvider({ children }) {
	const navigate = useNavigate()

	const [userName, setUserName] = useState(() => {
		return sessionStorage.getItem('currentUser')
	})
	const [isAuth, setIsAuth] = useState(() => {
		return !!sessionStorage.getItem('currentUser')
	})
	const [favoritos, toggleFavorites] = useFavorites(
		'usernames',
		userName
	)
	const isFavorite = (post) => {
		return favoritos.some(
			(user) =>
				user.username === userName &&
				user.favorites.some((item) => item.id === post.id)
		)
	}

	const activeAuth = (token) => {
		sessionStorage.setItem('currentUser', token)
		setIsAuth(true)
	}
	useEffect(() => {
		isAuth && navigate('/favorites')
	}, [isAuth])

	const valueContext = {
		isAuth,
		activeAuth,
		setIsAuth,
		userName,
		setUserName,
		favoritos,
		toggleFavorites,
		isFavorite
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
