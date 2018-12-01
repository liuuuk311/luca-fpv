import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet'

// Component Import
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { 
  mobileHeroHeight, 
  desktopHeroHeight,
  mediumBp
} from '../utils/variables';

export const Content = styled.div`
  animation: flyin 0.8s;
  margin-top: ${mobileHeroHeight};
  z-index: 10;

  @media(min-width: ${mediumBp}){
    margin-top: ${desktopHeroHeight};
  }

  @keyframes flyin {
    0% {
      transform: translateY(1000px)
    }

    70% {
      transform: translateY(-15px);
    }

    100% {
      transform: translateY(0);
    }
  }
`;

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Helmet 
          title="Kyle McDonald"
        />
        {/* Gotta find a better way to do this */}
        <style>
          {'body { font-family: Arial !important; background-color: #032C57;}'}
        </style>
        <Hero/>
        <Content>
          <Featured/>
          <About/>
          <Contact/>
          <Footer/>
        </Content>
      </Fragment>
    );
  }
}

export default HomePage;
