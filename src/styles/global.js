import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  font-family: 'M PLUS Rounded 1c', sans-serif;
}

body {
  -webkit-font-smoothing: antialiased;
}

button {
  cursor: pointer;
}
`;

export const Container = styled.div`
	margin-top: 100px;
`

export const Title = styled.h1`

	font-family: 'M PLUS Rounded 1c', sans-serif;
	font-weight: 500;
	font-size: 0.9rem;
	color: #5d6063;
	overflow: hidden;
	text-align: center;


span {
	position: relative;
	display: inline-block;
}

span:before,
span:after {
	content: '';
	position: absolute;
	top: 50%;
	border-bottom: 1px solid #5d6063;
	width: 450px; /* half of limiter */
	margin: 0 20px;
}
span:before {
	right: 100%;
}
span:after {
	left: 100%;
}
`
export const Grid = styled.div`
	width: 960px;
	margin: 0 auto;
  margin-top: 60px;

  ul {
    display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 60px;
	list-style: none;
  }
`
