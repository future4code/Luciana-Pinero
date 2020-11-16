import React from 'react';
import ShowPersonScreen from '../ShowPersonScreen/ShowPersonScreen';
import Header from '../Header/Header';
import ShowMatchScreen from '../ShowMatchScreen/ShowMatchScreen';
import { CardContainer, CardImage, CardText} from './styled'

function Container () {
    return(
    <CardContainer>  
        <Header />
        <ShowPersonScreen /> 
        {/* <ShowMatchScreen /> */}
    </CardContainer>
    )
    
}

export default Container