import styled from 'styled-components';
import { navy, white, sky, black } from '../../utils/colors';
import { largeBp } from '../../utils/variables';
import { darken } from 'polished';

export const FeaturedContainer = styled.div`
  background-color: ${white};
  display: flex;
  flex-direction: column;

  @media(min-width: ${largeBp}){
    flex-direction: row;
  }
`;

export const FeaturedSite = styled.div`
  color: ${black};
  padding: 30px 40px;
  width: 100%;

  @media(min-width: ${largeBp}){
    width: 35%;
  }
`;

export const FeaturedTop = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const FeaturedTitle = styled.h2`
  font-size: 24px;
  margin: 0;
`;

export const FeaturedLink = styled.a`
  color: ${black};
  border-bottom: 1px solid ${white};
  font-size: 12px;
  text-decoration: none;
  text-transform: uppercase;
  transform: translateY(3px);
  transition: border 0.2s ease-in-out;

  &:hover {
    border-bottom: 1px solid ${sky};
  }
`;

export const FeaturedDescription = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

export const FeaturedCta = styled.div`
  align-items: center;
  background-color: ${sky};
  color: ${white};
  display: flex;
  font-size: 18px;
  flex-direction: column;
  height: 150px;
  justify-content: center;
  width: 100%;

  @media(min-width: ${largeBp}){
    height: auto;
    width: 30%;
  }
`;

export const FeaturedCtaTitle = styled.span`

`;

export const FeaturedCtaLink = styled.a`
  background-color: ${navy};
  border: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
  margin-top: 15px;
  padding: 10px 22px;
  transition: background-color ease-in-out 0.2s;

  &:hover {
    background-color: ${darken(0.1, navy)};
    border: none;
    text-decoration: none;
}
`;