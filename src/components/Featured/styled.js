import styled from 'styled-components';
import { navy, white, sky, black, gray } from '../../utils/colors';
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
  background-color: ${sky};
  color: ${white};
  font-size: 18px;
  flex-direction: row;
  height: 250px;
  padding: 20px 40px;
  width: 100%;

  @media(min-width: ${largeBp}){
    height: auto;
    width: 30%;
  }
`;

export const FeaturedCtaTitle = styled.h4`
  font-size: 24px;
  font-weight: 600;
  display: block;
  margin-bottom: 0;
  text-align: center;
`;

export const FeaturedCtaSubtitle = styled.span`
  display: block;
  text-align: center;
  width: 100%;
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

export const FeaturedCtaInput = styled.input`
  background-color: ${white};
  border: none;
  border-radius: 0;
  color: ${black};
  font-size: 16px;
  padding: 35px 20px 20px 10px;
  transition: background-color ease-in-out 0.2s;
  width: 100%; 
  -webkit-appearance: none;

  &:hover, &:focus {
    background-color: ${gray};
    outline: none;
  }
`;

export const FeaturedCtaLabel = styled.div`
  color: ${black};
  display: block;
  transform: translateY(30px) translateX(10px);
`;

export const FeaturedCtaButton = styled.button`
  background-color: ${navy};
  border: none;
  color: ${white};
  cursor: pointer;
  display: block;
  font-size: 18px;
  margin: 15px auto 0 auto;
  padding: 18px 0;
  transition: background-color ease-in-out 0.2s;
  width: 100%;

  &:hover, &:hover {
    background-color: ${darken(0.1, navy)};
    text-decoration: none;
    outline: none;
  }
`;

