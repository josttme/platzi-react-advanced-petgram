import { PropTypes } from 'prop-types'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Context } from '../context/context'

export function PrivateRoute({ children }) {
	const { isAuth } = useContext(Context)

	if (!isAuth) {
		return <Navigate to="/login" />
	}

	return children
}

PrivateRoute.propTypes = {
	children: PropTypes.node
}
