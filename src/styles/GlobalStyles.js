import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
}
body{
    background-image: url('https://github.githubassets.com/images/modules/site/social-cards/github-social.png');
    background-position: 100% 50% 0px 0px;
    background-size: cover;
    background-repeat: repeat-y, repeat;
    background-attachment: fixed, scroll;   
}

.container{
    width: 100%;
    margin: auto;
}

`