import styled from 'styled-components';
import {coolColor, secondColor} from "../../constants/colors"


export const CardContainer = styled.div`
  width: 400px;
  height: 650px;
  border: 3px solid ${secondColor};
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */ 
  margin: 12px;
  `;



export const CardText = styled.p`
  margin: 8px;
  text-align: center;
`;