import { gql, useQuery } from '@apollo/client'

const GET_PHOTOS = gql`
	query Photos($categoryId: ID) {
		photos(categoryId: $categoryId) {
			categoryId
			id
			liked
			likes
			src
			userId
		}
		categories {
			cover
			id
			path
			name
		}
	}
`

export const useListOfPhotoCards = (categoryId) => {
	const { loading, error, data } = useQuery(GET_PHOTOS, {
		variables: { categoryId }
	})
	if (!data) return { loading, error }
	const photosWithCategory = data.photos.map((photo) => {
		const category = data.categories.find(
			(category) => parseInt(category.id) === photo.categoryId
		)
		return {
			id: photo.id,
			likes: photo.likes,
			liked: photo.liked,
			src: photo.src,
			userId: photo.userId,
			categoryName: category.name,
			categoryCover: category.cover,
			categoryId: category.id
		}
	})
	return {
		loading,
		error,
		photos: photosWithCategory
	}
}
