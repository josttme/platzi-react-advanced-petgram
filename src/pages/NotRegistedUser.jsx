import { useContext } from 'react'
import { Context } from '../context/context'
import { Form } from '../components/Form'
import { useRegisterMutation } from '../hooks/useRegisterMutation'

export function NotRegistedUser() {
	const { activeAuth } = useContext(Context)
	const { registerMutation } = useRegisterMutation()

	const handleAuth = async ({ email, password }) => {
		console.log(email, password)
		const input = { email, password }
		const variables = { input }
		registerMutation({ variables }).then(activeAuth)
	}
	return (
		<>
			<Form onSubmit={handleAuth} title={'registrarse'} />
			<Form onSubmit={activeAuth} title={'iniciar sesion'} />
		</>
	)
}
