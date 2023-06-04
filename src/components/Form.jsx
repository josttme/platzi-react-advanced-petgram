/* import { PropTypes } from 'prop-types'
import useFormUser from '../hooks/useFormUser'

export const Form = ({ onSubmit, title, disabled, error }) => {
	const [state, onChange] = useFormUser('')

	const { username } = state
	const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit({ username })
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
					placeholder="Username"
					type="text"
					name="username"
					value={username}
					onChange={onChange}
					autoComplete="username"
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
 */
import { PropTypes } from 'prop-types'
export function Form({
	onSubmit,
	value,
	onChange,
	placeholder,
	title,
	error
}) {
	return (
		<>
			<h2>{title}</h2>
			<form onSubmit={onSubmit}>
				<input
					className="bg-blue-600 p-2"
					type="text"
					value={value}
					onChange={onChange}
					autoComplete="username"
					placeholder={placeholder}
				/>
				<button type="submit">{title}</button>
			</form>
			{error && <span className="block text-red-500 ">{error}</span>}
		</>
	)
}

Form.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	error: PropTypes.string
}
