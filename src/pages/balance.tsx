import Head from 'next/head';

import { WithPrivateRoute } from '@root/high-order-components';

function Balance() {
	return (
		<>
			<Head>
				<title>Rixa - Balance</title>
			</Head>
			<h1>Balance</h1>
		</>
	);
}

export default WithPrivateRoute(Balance);
