import Head from 'next/head';

import { WithPrivateRoute } from '@root/high-order-components';

function Challenge(props: any) {
	return (
		<>
			<Head>
				<title>Rixa - Challenge</title>
			</Head>
			<h1>Challenge Room</h1>
		</>
	);
}

export default WithPrivateRoute(Challenge);
