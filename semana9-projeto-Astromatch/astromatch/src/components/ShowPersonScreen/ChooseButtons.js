import React from 'react';
import styled, { ButtonsContainer, XDislike, Heartlike } from './styled'
import heartfull from '../../images/heartfull.jpg'
import xdislike from '../../images/xdislike.jpg'
import axios from 'axios';

function ChooseButtons (props) {
   
    return(
    <ButtonsContainer>  
        <Heartlike src = {heartfull} onClick ={props.onClickYes} />
        <XDislike src = {xdislike} onClick ={props.onClickNo}/>

    </ButtonsContainer>
    )
    
}

export default ChooseButtons