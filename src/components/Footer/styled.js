import styled from 'styled-components';
import { white, black } from '../../utils/colors';
import { mediumBp } from '../../utils/variables';

export const FooterContainer = styled.div`
  align-items: center;
  background-color: ${white};
  display: flex;
  flex-direction: column;
  padding: 15px 20px;

  @media(min-width: ${mediumBp}){
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterCopy = styled.div`
  color: ${black};
  font-size: 16px;
`;

export const FooterIconList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-top: 10px;
  z-index: 15;

  @media(min-width: ${mediumBp}){
    top: 38px;
    margin: 0;
  }
`;

export const FooterIconListItem = styled.li`
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
`;

export const FooterIconLink = styled.a`
  color: ${black};
  display: block;
  font-size: 20px;
  cursor: hover;
  border-bottom: 1px solid ${white};
`;
