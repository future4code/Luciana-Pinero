import styled from 'styled-components';
import {coolColor, secondColor} from "../../constants/colors"


export const CardContainer = styled.div`
  width: 690px;
  height: 1000px;
  border: 3px solid ${secondColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12px;
  `;

export const CardImage = styled.img`
  width: 500px;
  height: 600px;
`;

export const CardText = styled.p`
  margin: 8px;
  text-align: center;
`;