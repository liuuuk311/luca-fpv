import styled from 'styled-components';
import { white, black, gray, sky } from '../../utils/colors';
import { mediumBp } from '../../utils/variables';

export const TwitterCtaContainer = styled.div`
  border-top: 1px solid ${sky};
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  padding: 20px;

  @media(min-width: ${mediumBp}){
    flex-direction: row;
    padding: 40px 60px;
  }
`

export const TwitterProfileContainer = styled.div`
 align-items: center;
  display: flex;
  color: ${white};
  flex-direction: column;
  justify-content: center;

   @media(min-width: ${mediumBp}){
    flex-direction: row;
    padding: 40px;
  }
`;

export const TwitterCtaImage = styled.img`
  border: 8px solid ${gray};
  height: 120px;
  width: 120px;

  @media(min-width: ${mediumBp}){
    margin-right: 40px;
  }
`;

export const TwitterCtaContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(max-width: ${mediumBp}){
    align-items: center;
    text-align: center;
  }
`;

export const TwitterCtaTitle = styled.h4`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const TwitterCtaDescription = styled.p`
  margin-top: 0;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 16px;
`; 