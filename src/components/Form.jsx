import { PropTypes } from 'prop-types'

export function Form({ onSubmit, value, onChange, title, error }) {
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
					placeholder="username"
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
	title: PropTypes.string.isRequired,
	error: PropTypes.string
}
