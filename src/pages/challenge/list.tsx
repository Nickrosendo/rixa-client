import Head from 'next/head';
import { connect } from 'react-redux';

import Button from '@root/components/button';
import WithPrivateRoute from '@root/components/hoc/with-private-route';

import { DefaultInitialState } from '@root/store';
import { login, logout } from '@root/store/auth/actions';
import { User } from '@root/helpers/interfaces';

function ChallengeList(props: any) {
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
				<title>Rixa - Challenge List</title>
			</Head>
			<h1>Challenge List</h1>
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
export default WithPrivateRoute(
	connect(mapStateToProps, mapDispatchToProps)(ChallengeList),
);
