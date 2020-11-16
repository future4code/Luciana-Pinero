import React from 'react'
import {HeaderContainer,Title} from './styled'

function Header(props) {
   
  
    return (
      <div>
        <HeaderContainer> 
          <button onClick = {props.goToShowPersonScreen}>Escolher</button>  
          <Title>
            ASTROMATCH
          </Title>
          <button onClick = {props.goToShowMatchScreen}>Lista</button>  
        </HeaderContainer>
      </div>
    );
  }
  
  export default Header;