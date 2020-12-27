import styled from 'styled-components';

export const Button = styled.button`
	background: ${(props) => props.theme.backgrounds.primary};
	border-radius: 3px;
	border: 1px solid ${(props) => props.theme.backgrounds.primary};
	color: ${(props) => props.theme.colors.light};
	margin: 0.5em 1em;
	padding: 0.25em 1em;
`;

export default Button;
