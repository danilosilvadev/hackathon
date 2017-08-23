import React, { Component } from 'react';
import Styled from 'styled-components';
import Grid from '../../assets/grid.scss';


const Li = Styled.li`
    list-style-type: none;
    margin-left: 2vw;
`

const A = Styled.a`
    text-decoration: none;
    color: white;
`

const Ul = Styled.ul`
    display: flex;
    flex-direction: row;
    margin-right: 10vw;
    font-size: 3vh;    
`

const Menu = () => {
    return <div>
        <Ul>
            <Li><A href='#'>Regras</A></Li>
            <Li><A href='#'>Dúvidas</A></Li>
        </Ul>
    </div>
}

export default Menu