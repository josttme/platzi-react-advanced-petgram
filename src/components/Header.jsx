import { PropTypes } from 'prop-types'
import { useContext } from 'react'
import { Context } from '../context/context'
import { Link, useLocation } from 'react-router-dom'
import { User } from './svg/User'
import { Logo } from './svg/Logo'

export function Header() {
	const { userName, isAuth } = useContext(Context)

	return (
		<header className=" fixed left-0 right-0 top-0 mx-auto flex h-16 w-full max-w-2xl items-center justify-between bg-[#000019] lg:h-20">
			<Link to="/" className="px-3">
				<Logo />
			</Link>
			<ButtonLogin userName={userName} isAuth={isAuth} />
		</header>
	)
}

function ButtonLogin({ userName, isAuth }) {
	const location = useLocation()
	const routesWithoutButton = ['/favorites', '/user', '/login']
	const shouldHideButton = routesWithoutButton.some(
		(route) => location.pathname === route
	)
	if (shouldHideButton && !isAuth) return
	return (
		<div className="p-2 lg:px-10 lg:text-2xl">
			{userName ? (
				<Link to="/user" className="flex items-center justify-center">
					<span className="text-lg lg:text-2xl">{userName}</span>
					<div className="grid h-12 w-12 place-content-center">
						<div className="relative  h-8 w-8 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600 ">
							<User />
						</div>
					</div>
				</Link>
			) : (
				<button className="rounded-full bg-gradient-to-r from-purple-700 via-red-500 to-yellow-500 p-[0.2rem] ">
					<span className="block rounded-full bg-[#000019] px-3 py-1.5 font-semibold text-white ">
						<Link to="/login">Iniciar sesión</Link>
					</span>
				</button>
			)}
		</div>
	)
}

ButtonLogin.propTypes = {
	isLoginPage: PropTypes.bool,
	userName: PropTypes.string,
	isAuth: PropTypes.bool
}
