import { useState, useEffect } from 'react'

const useLocalStorageLikes = () => {
	const [likedMovies, setLikedMovies] = useState(() => {
		const item = localStorage.getItem('liked_gram')
		return item ? JSON.parse(item) : {}
	})

	useEffect(() => {
		localStorage.setItem('liked_gram', JSON.stringify(likedMovies))
	}, [likedMovies])

	const toggleLike = (movieId) => {
		setLikedMovies((prevLikedMovies) => {
			const updatedMovies = { ...prevLikedMovies }

			if (updatedMovies[movieId]) {
				delete updatedMovies[movieId]
			} else {
				updatedMovies[movieId] = true
			}

			return updatedMovies
		})
	}

	return { likedMovies, toggleLike }
}

export default useLocalStorageLikes
