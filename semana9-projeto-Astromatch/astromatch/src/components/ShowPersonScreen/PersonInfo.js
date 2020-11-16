import React from 'react';
import Container from '../Container/Container';
import styled, { Bio, ContainerInfo, Name, Photo } from './styled'

function PersonInfo (props) {

      return(

    <ContainerInfo>  
    <Photo src = {props.profile.photo} />
    <Name> {props.profile.name}, {props.profile.age} </Name>
    <Bio> {props.profile.bio} </Bio>
    </ContainerInfo>
    
    )
    
}

export default PersonInfo