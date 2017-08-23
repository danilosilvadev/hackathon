import React, { Component } from 'react';
import Styled from 'styled-components';
import Header from './header/header'
import Grid from '../assets/grid.scss';


const H1 = Styled.h1`
color: grey;
`

const Container = () => {
    return (
      <div className="container">
        <Header />
        <H1>Hello hackaton</H1>
      </div>
    );
  }


export default Container;
