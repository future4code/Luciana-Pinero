import styled from "styled-components";
import {coolColor, secondColor} from "../../constants/colors"

export const HeaderContainer = styled.div `
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid lightgray;
    margin:0;
    align-items:center;
    background-color: ${coolColor};
    padding: 0 8px;
    
       
`


export const Title = styled.h1`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: ${secondColor};
`