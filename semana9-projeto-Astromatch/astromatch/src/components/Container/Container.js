import React, { useState } from 'react';
import ShowPersonScreen from '../ShowPersonScreen/ShowPersonScreen';
import Header from '../Header/Header';
import ShowMatchScreen from '../ShowMatchScreen/ShowMatchScreen';
import { CardContainer, CardImage, CardText} from './styled'

function Container () {
    const [selectedPage, setSelectedPage] = useState ('show-person-screen')
    const renderSelectedPage = () => {
        switch (selectedPage) {
            case 'show-person-screen':
                return <ShowPersonScreen />
            case 'show-match-screen':
                return < ShowMatchScreen />
            default:
                return <ShowPersonScreen />
        }
    }   

    const goToShowPersonScreen = () => {
        setSelectedPage ( 'show-person-screen')
    }

    const goToShowMatchScreen = () => {
        setSelectedPage ('show-match-screen')
    }

    return(
    <CardContainer>  
        <Header goToShowPersonScreen ={goToShowPersonScreen} goToShowMatchScreen = {goToShowMatchScreen} />
       {renderSelectedPage()}
    </CardContainer>
    )
    
}

export default Container