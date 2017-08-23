import React, { Component } from 'react';
import './MainPage.scss';
import Styled from 'styled-components'

const H1 = Styled.h1`
color: red;
`

class MainPage extends Component {
  render() {
    return (
      <div className="App">
        <H1>Hello hackaton</H1>
      </div>
    );
  }
}

export default MainPage;
