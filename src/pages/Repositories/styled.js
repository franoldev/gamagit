import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
max-width: 991px;
margin: 0 auto;
`;
export const Nav = styled.img`
margin-top: 25px;
margin-left: 25px;
display: flex;
align-items: flex-start;  
`;

export const Title = styled.h1`
text-align: center;
font-size: 2.5rem;
font-family: Roboto, sans-serif;
color: #fff;
margin-top: 50px;
`;

export const List = styled.ul` 
list-style: none;
padding: 0;
font-family: sans-serif;
`;

export const LisItem = styled.li`
margin: .8rem 0;
background: #fff;
color: #000;
border: 1px solid #ddd;
border-radius: .2rem;
padding: .5rem;
`;

export const LinkHome = styled(Link)`
display: block;
width: 4rem;
text-align: center;
margin: 2rem auto;
background-color: #28a745;
padding: 1.1rem 1.1rem 1.1rem;
color: #fff;
border: 0.5px solid #144620;
border-radius: .375rem;
text-decoration: none;
font-family: Roboto, sans-serif;

&:hover{
    background-color: #22863a;
}
`;

export const Footer = styled.p`
margin-top: 150px;
text-align: left;
padding: 80px;
}
`;