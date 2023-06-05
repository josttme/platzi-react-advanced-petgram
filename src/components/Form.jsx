import { PropTypes } from 'prop-types'

export function Form({ onSubmit, value, onChange, title, error }) {
	return (
		<section className="flex w-full flex-col gap-4 ">
			<h2 className="text-center text-2xl font-bold lg:text-3xl">
				{title}
			</h2>
			<form
				onSubmit={onSubmit}
				className="flex w-full flex-col items-center justify-center gap-4"
			>
				<input
					className="h-12 w-full rounded-lg border-2 border-transparent bg-blue-700 px-4 py-2 text-lg text-white transition-colors duration-300 placeholder:text-slate-100 placeholder:text-opacity-60 focus:border-white focus:outline-none lg:h-16 lg:text-xl"
					type="text"
					value={value}
					onChange={onChange}
					autoComplete="username"
					placeholder="username"
				/>
				<button
					type="submit"
					className='class="px-6 focus:ring-opacity-80" w-full transform rounded-lg bg-blue-600 py-2 text-lg font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 lg:py-4 lg:text-xl'
				>
					{title}
				</button>
			</form>
			{error ? (
				<span className="block text-lg text-red-500 lg:text-2xl">
					{error}
				</span>
			) : (
				<span className="block text-lg">&nbsp;</span>
			)}
		</section>
	)
}

Form.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	error: PropTypes.string
}
