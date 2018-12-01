import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { sky, white } from '../utils/colors';
import { mediumBp } from '../utils/variables';

const LogoAside = styled.div`
  max-width: 120px;
  left: 0;
  position: absolute;
  top: 0;
  width: 10%;
`;

const LogoImg = styled.div`
  animation: logoFlyIn 0.7s;
  align-items: center;
  background-color: ${sky};
  color: ${white};
  display: flex;
  font-size: 36px;
  font-family: Arial, sans-serif;
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

class Logo extends Component {
  render() {
    return (
      <Link to="/">
        <LogoAside>
          <LogoImg>
              K
          </LogoImg>
        </LogoAside>
      </Link>
    );
  }
}

export default Logo;
