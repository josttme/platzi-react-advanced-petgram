import { useContext } from 'react'
import { Context } from '../context/context'
import { Form } from '../components/Form'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useLoginMutation'

export function NotRegistedUser() {
	const { activeAuth } = useContext(Context)
	const { registerMutation, loading, error } = useRegisterMutation()
	const {
		loginMutation,
		loading: loadingLogin,
		error: errorLogin
	} = useLoginMutation()

	const handleAuth = async ({ email, password }) => {
		console.log(email, password)
		const input = { email, password }
		const variables = { input }
		registerMutation({ variables }).then(({ data }) => {
			const { signup } = data
			activeAuth(signup)
		})
	}

	const onLogin = ({ email, password }) => {
		const input = { email, password }
		const variable = { input }
		loginMutation({ variables: variable }).then(({ data }) => {
			const { login } = data
			activeAuth(login)
		})
	}

	const errorMsg = error && 'El usuario ya existe.'
	const errorMsgLogin =
		errorLogin && 'El usuario o contraseña es incorrecto.'
	return (
		<>
			<Form
				disabled={loading}
				error={errorMsg}
				onSubmit={handleAuth}
				title={'registrarse'}
			/>
			<Form
				onSubmit={onLogin}
				disabled={loadingLogin}
				error={errorMsgLogin}
				title={'iniciar sesion'}
			/>
		</>
	)
}
