import { PropTypes } from 'prop-types'
import useFormUser from '../hooks/useFormUser'

export const Form = ({ onSubmit, title, disabled, error }) => {
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
			<form
				disabled={disabled}
				onSubmit={handleSubmit}
				className="text-red-500 disabled:opacity-50"
			>
				<input
					placeholder="Email"
					name="email"
					value={email}
					onChange={onChange}
					autoComplete="username"
					disabled={disabled}
					className="text-red-500 disabled:opacity-50"
				/>
				<input
					type="password"
					placeholder="Password"
					name="password"
					value={password}
					onChange={onChange}
					autoComplete="current-password"
					disabled={disabled}
					className="text-red-500 disabled:opacity-50"
				/>
				<button
					className="text-red-500 disabled:opacity-50"
					type="submit"
				>
					{title}
				</button>
				{error && (
					<span className="block text-red-500 ">{error}</span>
				)}
			</form>
		</>
	)
}

Form.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	error: PropTypes.string,
	disabled: PropTypes.bool
}
