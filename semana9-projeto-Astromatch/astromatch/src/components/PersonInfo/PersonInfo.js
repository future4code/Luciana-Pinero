import React, {useState} from 'react'
import {
    ContainerInfo,   
    Photo, 
    Name,      
    Age,      
    Bio
} from './styled';

import LikeBottom from '../LikeBottom/LikeBottom';
import DislikeBottom from '../DislikeBottom/DislikeBottom';

const PersonInfo = (props) => {
    return (
        <ContainerInfo>
            <Photo src = {""} />
            <Name>Person Fake </Name>
            <Age>XX</Age>
            <Bio>alala quer like</Bio>
        
        <DislikeBottom />
        <LikeBottom />
        </ContainerInfo>
    )
};

export default PersonInfo;