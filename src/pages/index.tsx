import Head from 'next/head';
import { connect } from 'react-redux';

import Button from '../components/button';

import { DefaultInitialState } from '../store';
import { login, logout } from '../store/auth/actions';
import { User } from '../helpers/interfaces';

function Home(props: any) {
	const { loggedIn } = props.authReducer;
	const { login, logout } = props;
	const mockUser: User = {
		nickname: 'nickrosendo',
		name: 'Nicolas Rosendo',
		email: 'test@test.com',
		creation: new Date(),
	};

	const handleLogin = () => {
		login(mockUser);
	};

	const handleLogout = () => {
		logout(mockUser);
	};

	return (
		<>
			<Head>
				<title>Rixa</title>
			</Head>
			<h1>Hello World</h1>
			<p>Logged In: {loggedIn.toString()}</p>
			<Button onClick={handleLogin}> login </Button>
			<Button onClick={handleLogout}> logout </Button>
		</>
	);
}

const mapStateToProps = (state: DefaultInitialState) => ({
	authReducer: state.authReducer,
});
const mapDispatchToProps = {
	login,
	logout,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
