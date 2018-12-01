import styled, { css } from 'styled-components';
import { white, gray, black, sky } from '../../utils/colors';
import { globalMw, mediumBp } from '../../utils/variables';
import { darken } from 'polished';


export const FeaturedPostsMainContainer = styled.div`
  background-color: ${white};

  a {
    text-decoration: none;
  }
`;

export const FeaturedPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: ${globalMw};
  padding: 20px 20px 20px 20px;

  @media(min-width: ${mediumBp}){
    flex-direction: row;
    padding: 40px 0;
  }
`;

export const FeaturedPost = styled.div`
  background-color: ${gray};
  color: ${black};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 1 100%;
  height: 100%;
  margin-bottom: 20px;
  padding: 20px;
  transition: background-color 0.2s ease-in-out;

  @media(min-width: ${mediumBp}){
    flex: 0 1 49%;
    margin-bottom: 25px;
    padding: 30px;
  }

  ${props => props.fullwidth === true && css`
    flex: 0 1 100% !important;
    margin-right: 0 !important;
  `}

  &:nth-child(odd){
    margin-right: 0;

    @media(min-width: ${mediumBp}){
      margin-right: 20px;
    }
  }

  &:hover {
    background-color: ${darken(0.1, gray)};
  }

  &:last-child {
    margin-bottom: 0;
  }

`;

export const FeaturedPostTitle = styled.h3`
  color: ${black};
  font-size: 28px;
  margin-bottom: 6px;
`

export const FeaturedPostDate = styled.span`
  display: block;
  color: ${black};
  text-transform: uppercase;
  margin-top: 18px;
`;

export const FeaturedButtonContainer = styled.div`
  margin: 0 auto;
  max-width: 250px;
  padding: 0 20px 20px 20px;

  @media(min-width: ${mediumBp}){
    padding: 0 40px 40px 40px;
  }
`;

export const FeaturedButton = styled.span`
  background-color: ${sky};
  border: none;
  color: ${white};
  cursor: pointer;
  display: block;
  font-size: 18px;
  margin: 0px auto 0px auto;
  padding: 18px 24px;
  transition: background-color ease-in-out 0.2s;
  text-align: center;
  width: 100%;

  &:hover, &:hover {
    background-color: ${darken(0.1, sky)};
    text-decoration: none;
    outline: none;
  }
`;
