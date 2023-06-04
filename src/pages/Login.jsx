import { Form } from '../components/Form'
import { UserList } from '../components/UserList'
import { useAuthentication } from '../hooks/useAuthentication'

export function Login() {
	const {
		loginUsername,
		registerUsername,
		errorLogin,
		errorRegister,
		userNames,
		handleSubmit,
		handleChangeLogin,
		handleChangeRegister,
		handleLoginExist,
		handleRegister
	} = useAuthentication()

	return (
		<>
			<Form
				onSubmit={handleSubmit}
				value={loginUsername}
				onChange={handleChangeLogin}
				title="Iniciar sesión"
				error={errorLogin}
			/>

			<Form
				onSubmit={handleRegister}
				value={registerUsername}
				onChange={handleChangeRegister}
				title="Registrarse"
				error={errorRegister}
			/>

			<UserList
				userNames={userNames}
				onUserClick={handleLoginExist}
			/>
		</>
	)
}
