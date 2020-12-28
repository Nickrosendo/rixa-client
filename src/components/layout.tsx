import { withRedux } from '@root/high-order-components';

function LayoutComponent({ children }: { children: React.ReactNode }) {
	return <div>{children}</div>;
}

export const Layout = withRedux(LayoutComponent);

export default withRedux(LayoutComponent);
