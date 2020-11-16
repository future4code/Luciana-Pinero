import React from 'react'
import {HeaderContainer,Title} from './styled'

function Header() {
   
  
    return (
      <div>
        <HeaderContainer> 
          <button>Escolher</button>  
          <Title>
            ASTROMATCH
          </Title>
          <button>Lista</button>  
        </HeaderContainer>
      </div>
    );
  }
  
  export default Header;