import styled from "styled-components";
import {colorCool, secondColor} from "../../constants/colors"

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  align-items: center;
  
`;

export const Photo = styled.img`
  width: 100%;
  max-height: 350px;
`;

export const Name = styled.p`
  display:inline;
  justify-content:center;
  flex-direction:row;
  color: ${secondColor};
  font-size: 30px;
  margin: 0 0 4px 0;
  font-weight: 600;
  border: 1px solid secondColor;
`;

export const Age = styled.p`
  display:inline;
  justify-content:center;
  flex-direction:row;
  color: ${secondColor};
  font-size: 30px;
  margin: 0;
`;

export const Bio = styled.p`
  margin: 8px;
  text-align: center;
`;

export const Divflex = styled.div`
display:flex;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content:space-around;
`


export const XDislike = styled.img`
  width: 70px;
  height: 70px;
  cursor: pointer;
  display:inline;
  justify-content:center;
  flex-direction:row;
`;

export const Heartlike = styled.img`
  display:inline;
  width: 70px;
  height: 70px;
  cursor: pointer;
`;
