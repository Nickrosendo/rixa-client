import { withRedux } from '@root/components/hoc/with-redux-store';

function Layout({ children }: { children: React.ReactNode }) {
	return <div>{children}</div>;
}

export default withRedux(Layout);
