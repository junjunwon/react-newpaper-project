import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
		*, *::before, *::after {
			// box-sizing: inherit;
		}
    #root{
        height:100vh;
        width: 395px;
        overflow-y:hidden;
        margin: 0 auto;
    }
    body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
    };
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }
    .scrapImg {
        border: 2px solid #6D6D6D;
        padding: 5px 4px;
        text-align:center;
        border-radius:4px;
        cursor:pointer;
    }
    .spinClass {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
	}
    .errorClass {
        font-size:35px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export default GlobalStyle;