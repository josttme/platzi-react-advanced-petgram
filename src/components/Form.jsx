import { PropTypes } from 'prop-types'
import useFormUser from '../hooks/useFormUser'

export const Form = ({ onSubmit, title }) => {
	const initialState = {
		email: '',
		password: ''
	}

	const [state, onChange] = useFormUser(initialState)

	const { email, password } = state
	const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit({ email, password })
	}
	return (
		<>
			<h2>{title}</h2>
			<form onSubmit={handleSubmit} className="text-red-500">
				<input
					placeholder="Email"
					name="email"
					value={email}
					onChange={onChange}
				/>
				<input
					type="password"
					placeholder="Password"
					name="password"
					value={password}
					onChange={onChange}
				/>
				<button type="submit">{title}</button>
			</form>
		</>
	)
}

Form.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired
}
