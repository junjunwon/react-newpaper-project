import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
		*, *::before, *::after {
			// box-sizing: inherit;
		}
    // html {
    //     height:812px;
    //     overflow:scroll;
    // }
    #root{
        height:100vh;
        width: 395px;
        overflow-y:hidden;
        // margin-bottom:60px;
        margin: 0 auto;
        // position: absolute;
        // left: 50%;
        // top: 50%;
        // transform: translate(-50%, -50%);
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
    // .ant-modal {
    //     position: absolute;
    //     top: 50%;
    //     left: 50%;
    //     transform: translate(-50%, -50%);
    //     width:335px !important;
	// 	height:480px;
	// 	border-radius: 16px;
    // }
`;

export default GlobalStyle;