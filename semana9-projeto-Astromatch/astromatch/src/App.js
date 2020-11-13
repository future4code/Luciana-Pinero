import React, {useState} from 'react';
import Profile from './components/Profile/Profile.js'
import ShowPersonScreen from './screens/ShowPersonScreen/ShowPersonScreen.js'
import ShowMatchScreen from './screens/ShowMatchScreen/ShowMatchScreen.js';
import styled from "styled-components";

const ScreenContainer = styled.div`
padding:60px 0;
display:flex;
justify-content:center;

`

function App() {

  const [currentPage, setCurrentPage] = useState ("Person")

  const chooseCurrentScreen = () => {
   switch (currentPage){
     case "Person":
      return <ShowPersonScreen />
     case "Match":
      return <ShowMatchScreen />
      default: 
      return <div> Erro página não encontrada. </div>
   } 
  } 
  return (
    <ScreenContainer>
      
      {chooseCurrentScreen()}    
           
      
    </ScreenContainer>
  );
}

export default App;