import styled from 'styled-components'
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
	z-index: 1;
	position: relative;
	height: 56px;
	border-bottom: 1px solid pink;
`
export const Logo = styled.a.attrs({
	href: '/'
})`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100px;
	height: 56px;
	background: url(${logoPic});
	background-size: contain;
`


