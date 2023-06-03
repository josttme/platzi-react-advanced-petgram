import { useLocalStorage } from './useLocalStorage'

export const useFavorites = (key, userName) => {
	const [favorites, setFavorites] = useLocalStorage(key)

	const toggleFavorite = (favorite) => {
		const userIndex = favorites.findIndex(
			(user) => user.username === userName
		)

		if (userIndex !== -1) {
			// Si el usuario ya existe en la lista de favoritos
			const userFavorites = favorites[userIndex].favorites
			const isFavoriteInList = userFavorites.some(
				(item) => item.id === favorite.id
			)

			if (isFavoriteInList) {
				// Si el favorito ya existe, se eliminará de la lista
				const updatedFavorites = userFavorites.filter(
					(item) => item.id !== favorite.id
				)
				setFavorites([
					...favorites.slice(0, userIndex),
					{ ...favorites[userIndex], favorites: updatedFavorites },
					...favorites.slice(userIndex + 1)
				])
			} else {
				// Si el favorito no existe, se agregará a la lista
				setFavorites([
					...favorites.slice(0, userIndex),
					{
						...favorites[userIndex],
						favorites: [...userFavorites, favorite]
					},
					...favorites.slice(userIndex + 1)
				])
			}
		} else {
			// Si el usuario no existe, se creará un nuevo objeto de usuario con el favorito
			setFavorites([
				...favorites,
				{ username: userName, favorites: [favorite] }
			])
		}
	}

	return [favorites, toggleFavorite]
}
