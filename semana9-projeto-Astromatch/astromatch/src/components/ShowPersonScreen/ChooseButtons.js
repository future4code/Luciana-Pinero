import React from 'react';
import styled, { ButtonsContainer, XDislike, Heartlike } from './styled'
import heartfull from '../../images/heartfull.jpg'
import xdislike from '../../images/xdislike.jpg'

function ChooseButtons () {
    return(
    <ButtonsContainer>  
        <Heartlike src = {heartfull} />
        <XDislike src = {xdislike} />

    </ButtonsContainer>
    )
    
}

export default ChooseButtons