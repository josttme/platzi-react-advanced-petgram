import { PropTypes } from 'prop-types'

export function PostCard({ categoryId, src, userId, likes }) {
	return (
		<div className="h-full w-full py-2">
			<div className="flex h-full w-full items-center ">
				<div className="grid h-12 w-12 place-content-center">
					<div className="relative  h-8 w-8 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
						<svg
							className="absolute -left-1 h-10 w-10 text-gray-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
								clipRule="evenodd"
							></path>
						</svg>
					</div>
				</div>
				<span>{categoryId}</span>
			</div>
			<div>
				<img className="w-full" src={src} alt={categoryId} />
			</div>
			<div className="p-2">
				<div className="flex gap-2 pb-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						strokeWidth="2.1"
						viewBox="0 0 24 24"
						className="h-7 w-7 stroke-white"
					>
						<path
							strokeLinejoin="round"
							d="M22 8.862a5.95 5.95 0 01-1.654 4.13c-2.441 2.531-4.809 5.17-7.34 7.608-.581.55-1.502.53-2.057-.045l-7.295-7.562c-2.205-2.286-2.205-5.976 0-8.261a5.58 5.58 0 018.08 0l.266.274.265-.274A5.612 5.612 0 0116.305 3c1.52 0 2.973.624 4.04 1.732A5.95 5.95 0 0122 8.862z"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						className="h-7 w-7 fill-white "
					>
						<path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
						<path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
					</svg>
				</div>
				<span>{likes} likes</span>
			</div>
		</div>
	)
}

PostCard.propTypes = {
	categoryId: PropTypes.string,
	src: PropTypes.string,
	userId: PropTypes.number,
	likes: PropTypes.number
}
