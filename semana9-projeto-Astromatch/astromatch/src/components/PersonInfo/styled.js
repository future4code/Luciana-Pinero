import styled from "styled-components";
import {colorCool, secondColor} from "../../constants/colors"

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  align-items: center;
`;

export const Photo = styled.img`
  width: 600px;
  height: 650px;
`;

export const Name = styled.p`
  display:inline;
  justify-content:center;
  flex-direction:row;
  color: ${secondColor};
  font-size: 30px;
  margin: 0 0 4px 0;
  font-weight: 600;
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



