import React, {useState} from 'react';
import ResetButton from './components/ResetButton/ResetButton';
import Container from './components/Container/Container'
import ChooseButtons from './components/ShowPersonScreen/ChooseButtons';

function App () {
  return (
    <div>
      <Container />
      <ResetButton /> 

    </div>
  )
}

export default App;