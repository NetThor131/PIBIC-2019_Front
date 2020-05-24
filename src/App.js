import React from 'react';
import Routes from './routes/index.js'
//import background from './assets/imgs/background.png'

import { GlobalStyle } from './styles/global.js';
import { Container } from './styles/pagecontainer'


const App = () => {
  return (
    <Container>
      <GlobalStyle/>
      <Routes/>
    </Container>
  )
}

export default App;
