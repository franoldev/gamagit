import styled from 'styled-components';

export const Nav = styled.img`
margin-top: 25px;
margin-left: 25px;
display: flex;
align-items: flex-start;  
`;

export const Title = styled.h1`
height: 28vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
font-size: 2.5rem;
font-family: Roboto, sans-serif;
color: #fff;
`;

export const Content = styled.div`
height: 16vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
`;

export const Input = styled.input`
border: 1px solid #ddd;
height: 2.1rem;
padding: 0 .5rem;
border-radius: .2rem;
font-size: 1.0rem;

&:focus,
&:active {
    outline: none;
    box-shadow: none;
}
`;

export const Button = styled.button`
height: 1.6rem;
border: 0.5px solid #144620;
background: #28a745;
color: #fff;
border-radius: .375rem;
position: relative;
padding: 1.1rem 1.1rem 1.1rem;
margin: 0 5px;
font-size: 1.0rem;
font-weight: 500;
line-height: 0.3;
cursor: pointer;
transition: 0.5s;

&:focus,
&:hover,
&:active {
    outline: none;
    box-shadow: none;
    background-color: #22863a;
}
`;

export const ErrorMsg = styled.p`
display: block;
font-size: 1.5rem;
text-align: center;
color: #ff0000;
font-height: 600;
font-family: Roboto, sans-serif;
margin-top: 5rem;
`;

export const Footer = styled.p`
margin-top: 300px;
text-align: left;
padding: 80px;
}
`;