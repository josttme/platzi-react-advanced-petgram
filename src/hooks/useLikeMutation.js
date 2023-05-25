import { useMutation, gql } from '@apollo/client'

const MUTATION_LIKE_PHOTO = gql`
	mutation likePhoto($input: LikePhoto!) {
		likePhoto(input: $input) {
			id
			liked
			likes
		}
	}
`
export const useLikeMutation = () => {
	const [mutation] = useMutation(MUTATION_LIKE_PHOTO)
	return { mutation }
}
