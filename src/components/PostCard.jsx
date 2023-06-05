import { PropTypes } from 'prop-types'
import { useContext } from 'react'
import { Context } from '../context/context'
import { Heart } from './svg/Heart'

export function PostCard({
	id,
	src,
	categoryName,
	categoryCover,
	categoryId,
	isFavorite
}) {
	const { toggleFavorites } = useContext(Context)

	const handleLikeClick = () => {
		toggleFavorites({
			id,
			src,
			categoryName,
			categoryCover,
			categoryId
		})
	}

	return (
		<div className="h-full w-full py-2">
			<div className="flex items-center gap-2 p-2 ">
				<div className="grid h-12 w-12 place-content-center lg:h-20 lg:w-20">
					<img
						className="h-10 w-10 rounded-full object-cover lg:h-16  lg:w-16"
						src={categoryCover}
						alt={categoryName}
						width={700}
						height={400}
					/>
				</div>
				<span className="text-lg lg:text-2xl">{categoryName}</span>
			</div>
			<div>
				<img
					className="w-full"
					width={700}
					height={400}
					src={src}
					alt={categoryId}
				/>
			</div>
			<div className="p-2">
				<div className="flex gap-2 pb-2">
					<button type="button" onClick={handleLikeClick}>
						<Heart isFavorite={isFavorite} />
					</button>
					{/* 					<a
						href="https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"
						download
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							className="h-7 w-7 fill-white "
						>
							<path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
							<path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
						</svg>
					</a> */}
				</div>
			</div>
		</div>
	)
}

PostCard.propTypes = {
	id: PropTypes.string,
	likes: PropTypes.number,
	liked: PropTypes.bool,
	src: PropTypes.string,
	userId: PropTypes.string,
	categoryName: PropTypes.string,
	categoryCover: PropTypes.string,
	categoryId: PropTypes.string,
	isFavorite: PropTypes.bool
}
