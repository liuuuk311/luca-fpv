import styled from 'styled-components';
import { navy, white, sky } from '../../utils/colors';
import { 
  mobileHeroHeight, 
  desktopHeroHeight,
  mediumBp
} from '../../utils/variables';

export const HeroContainer = styled.div`
  background-color: ${navy};
  display: flex;
  flex-direction: column;
  height: ${mobileHeroHeight};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;

  @media(min-width: ${mediumBp}){
    flex-direction: row;
    height: ${desktopHeroHeight};
  }
`;

export const HeroAside = styled.div`
  max-width: 120px;
  width: 10%;
`;

export const HeroLogo = styled.div`
  animation: logoFlyIn 0.7s;
  align-items: center;
  background-color: ${sky};
  color: ${white};
  display: flex;
  font-size: 36px;
  font-weight: 500;
  height: 80px;
  justify-content: center;
  width: 80px;

  @media(min-width: ${mediumBp}){
    font-size: 48px;
    height: 120px;
    width: 120px;
  }

  @keyframes logoFlyIn {
    0% {
      transform: translateX(-500px);
    }

    100%  {
      transform: translateX(0);
    
    }
  }
`;

export const HeroList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  top: 30px;
  position: absolute;
  right: 30px;
  z-index: 15;

  @media(min-width: ${mediumBp}){
    top: 38px;
  }

  a {
    color: ${white};
    display: block;
    font-size: 20px;
    cursor: hover;
    border-bottom: 1px solid ${navy};
    transition: border 0.25s ease-in-out;
  }

  a:hover {
    border-bottom: 1px solid ${sky};
  }
`;

export const HeroListItem = styled.li`
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
`;

export const HeroContent = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 30px;
  width: 90%;
  z-index: 5;

  @media(min-width: ${mediumBp}){
    padding: 0 0 0 10%;
  }
`;

export const HeroTitle = styled.h1`
  color: ${white};
  font-size: 35px;
  line-height: 42px;
  margin-bottom: 15px;
  max-width: 700px;
  width: 100%;

  @media(min-width: ${mediumBp}){
    font-size: 64px;
    line-height: 76px;
    margin-bottom: 15px;
  }
`;

export const HeroDescription = styled.p`
  color: ${white};
  font-size: 16px;
  line-height: 25px;
  max-width: 500px;
  width: 100%;

  @media(min-width: ${mediumBp}){
    font-size: 18px;
    line-height: 28px;
  }
`;