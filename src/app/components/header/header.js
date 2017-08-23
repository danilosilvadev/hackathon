import React, { Component } from 'react';
import Grid from '../../assets/grid.scss';
import Menu from './menu';
import Styled from 'styled-components';

const Div = Styled.div`
    display: flex;
    flex-direction: row;  
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    justify-content: space-between;
    font-family: verdana;
    `

const H1 = Styled.h1`
    display: inline-flex;    
    color: white;
    background-color: #1C1C1C;
    font-size: 6vh;
    font-family: Courier new;
    `

const HeaderContent = Styled.div`
    margin:5em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 700px) {
           
    }
    
`

const P = Styled.p`
    color: white;
    font-family: verdana;
    font-size: 3vh;
`

const A = Styled.a`
    color: #c85656;
    background-color: #1C1C1C;
    text-decoration: none;
    
`
const H2 = Styled.h2`
    display: inline-flex;  
    color: white;
    background-color: #1C1C1C;
    font-size: 3vh;
    font-family: verdana;
`

const Inscrevase = Styled.a`
    background-color: #c85656;
    border: 2px solid #c85656;
    border-radius: 4px;
    color: white;
    font-size: 6vh;
    display: inline-flex;
    font-family: verdana;
    text-decoration: none;
    @media (max-width: 980px) {
        font-size: 4vh;        
	}
    @media (max-width: 700px) {
        display: none;
	}
`


const Header = () => {
    return <div className="containerHeader">
        <Div>
            <h1>Logo</h1>
            <Menu />
        </Div>
        <HeaderContent>
            <div>
                <H1>HackaCenter2017</H1>
                <P>O concurso anual de programação do <A href='#'>Training Center.</A></P>
            </div>
            <div>
                <H2>06/06/06 às 20hrs.</H2><br /><br />
                <Inscrevase href='#'>Inscreva-se</Inscrevase>
            </div>

        </HeaderContent>

    </div>
}

export default Header