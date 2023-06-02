import { useState } from 'react'

const likedPostList = () => {
	const item = localStorage.getItem('liked_gram')
	return item || {}
}

const useLocalStorageLikes = () => {
	const [likedMovies, setLikedMovies] = useState(likedPostList)

	const toggleLike = (post) => {
		const item = { likedMovies }
		console.log(!item[post.id])
		if (!item[post.id]) {
			item[post.id] = post
		} else {
			item[post.id] = undefined
		}
		console.log(item)
		/* 	const updatedLikes = { ...likedMovies }

	
		console.log(updatedLikes)
		localStorage.setItem('liked_gram', JSON.stringify(updatedLikes))
		setLikedMovies(updatedLikes) */
		/* setLikedMovies((prevLikedMovies) => { */
		/* 		const isLiked = updatedMovies.some(
				(postStorage) => postStorage.id === post.id
			) */
		/* 	if (isLiked) {
				return prevLikedMovies.filter((movie) => movie.id !== post.id)
			} else {
				return [...prevLikedMovies, post]
			} */
		/* }) */
		setLikedMovies([])
	}

	return { likedMovies, toggleLike }
}

export default useLocalStorageLikes
