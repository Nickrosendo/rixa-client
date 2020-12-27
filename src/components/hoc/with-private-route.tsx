import React from 'react';
import Router from 'next/router';

const home = '/?redirected=true'; // Define your login route address.

/**
 * Check user authentication and authorization
 * It depends on you and your auth service provider.
 * @returns @boolean
 */
const checkUserAuthentication = async (): Promise<boolean> => {
	return true;
};

const WithPrivateRoute = (WrappedComponent) => {
	const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

	hocComponent.getInitialProps = async (context) => {
		const userAuth = await checkUserAuthentication();

		// Are you an authorized user or not?
		if (!userAuth) {
			// Handle server-side and client-side rendering.
			if (context.res) {
				context.res?.writeHead(302, {
					Location: home,
				});
				context.res?.end();
			} else {
				Router.replace(home);
			}
		} else if (WrappedComponent.getInitialProps) {
			const wrappedProps = await WrappedComponent.getInitialProps({
				...context,
				auth: userAuth,
			});
			return { ...wrappedProps, userAuth };
		}

		return { userAuth };
	};

	return hocComponent;
};

export default WithPrivateRoute;
