import React, {useState} from 'react'
import {
    ContainerInfo,   
    Photo, 
    Name,      
    Age,      
    Bio,
    Divflex,
} from './styled';
import {colorCool, secondColor} from "../../constants/colors"

import LikeBottom from '../LikeBottom/LikeBottom';
import DislikeBottom from '../DislikeBottom/DislikeBottom';

const PersonInfo = (props) => {
    return (
        <ContainerInfo>
            <Photo src = {props.photo} />
            <br></br>
            <Divflex>
            <Name>{props.name}</Name>
            <Age>{props.age}</Age>
            </Divflex>
            <Bio>{props.bio}</Bio>
        <Divflex>
        <DislikeBottom />
        <LikeBottom />
        </Divflex>
        </ContainerInfo>
    )
};

export default PersonInfo;