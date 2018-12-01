import styled from 'styled-components';
import { white, black, navy, sky } from '../utils/colors';
import { mobileHeroHeight, desktopHeroHeight, mediumBp } from '../utils/variables';

export const ImageContainer = styled.div`
  background-image: url('${props => props.image}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${mobileHeroHeight};
  width: 100%;

  @media(min-width: ${mediumBp}){
    height: ${desktopHeroHeight};
  }
`;

export const BlogContainer =  styled.div`
  background-color: ${white};
  font-family: Arial, Helvetica, sans-serif;
  margin: -80px 20px 20px;
  max-width: 1300px;
  position: relative;

  @media(min-width: ${mediumBp}){
    margin: -80px auto 40px;
  }
`;

export const BlogDateContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: -18px;
  width: 100%;
`;

export const BlogDate = styled.span`
  background-color: ${navy};
  color: ${white};
  font-size: 12px;
  padding: 8px 16px;
  text-transform: uppercase;
`;

export const BlogTitle = styled.h1`
  color: ${black};
  display: block;
  font-size: 44px;
  line-height: 50px;
  margin: 0 auto;
  text-align: center;
  padding: 40px 20px 0;

  @media(min-width: ${mediumBp}){
    padding: 60px 80px 0;
    max-width: 1000px;
  }  
`;

export const BlogAuthor = styled.div`
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
`;

export const BlogContent = styled.div`
  font-size: 18px;
  line-height: 26px;
  padding: 20px 20px;

  @media(min-width: ${mediumBp}){
    padding: 40px 60px 20px 60px;
  }

  a {
    color: ${sky};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`