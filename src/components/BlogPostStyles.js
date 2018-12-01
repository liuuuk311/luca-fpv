import styled from 'styled-components';
import { gray, white, navy } from '../utils/colors';
import { globalMw, mediumBp } from '../utils/variables';

export const MainContainer = styled.div`
  font-family: Arial !important; 
  background-color: ${gray};
  padding: 100px 0px;

  @media(min-width: ${mediumBp}){
    padding: 180px 0 0 0 ;
  }
  
`;

export const ContentContainer = styled.div`
  background-color: ${white};
  margin:  0 20px 40px 20px;
  max-width: ${globalMw};
  padding: 0 10px;

  @media(min-width: ${mediumBp}){
    margin:  0 auto 40px auto;
    padding: 0 40px;
  }
`;

export const ContentTitleContainer = styled.div`
  margin:  0 20px;
  max-width: ${globalMw};

  @media(min-width: ${mediumBp}){
    margin: 0 auto;
  }
`;

export const ContentTitle = styled.h2`
  background-color: ${navy};
  color: ${white};
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 0;
  padding: 40px;
`