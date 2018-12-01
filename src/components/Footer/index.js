import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTwitter, 
  faProductHunt, 
  faGithub, 
  faDribbble
} from '@fortawesome/free-brands-svg-icons';

import { AccessibleText } from '../ScreenReader';

import {
  FooterContainer,
  FooterCopy,
  FooterIconList,
  FooterIconListItem,
  FooterIconLink
} from './styled';

class Footer extends Component {

  state = {
    year: null,
  }

  componentWillMount(){
    const date = new Date;

    this.setState({
      year: date.getFullYear()
    });
  }

  render() {
    const { year } = this.state;
    return (
      <FooterContainer>
        <FooterCopy>
          &copy; {year} - Kyle McDonald
        </FooterCopy>
        <FooterIconList>

          <FooterIconListItem>
            <FooterIconLink href="https://www.twitter.com/designbykyle" target="_blank" rel="noopener">
              <AccessibleText>
                Twitter
              </AccessibleText>
              <FontAwesomeIcon icon={faTwitter} />
            </FooterIconLink>
          </FooterIconListItem>

          <FooterIconListItem>
            <FooterIconLink href="https://www.producthunt.com/@hustlinhack" target="_blank" rel="noopener">
              <AccessibleText>
                Product Hunt
              </AccessibleText>
              <FontAwesomeIcon icon={faProductHunt} />
            </FooterIconLink>
          </FooterIconListItem>

          <FooterIconListItem>
            <FooterIconLink href="https://github.com/KyleMCD" target="_blank" rel="noopener">
              <AccessibleText>
                GitHub
              </AccessibleText>
              <FontAwesomeIcon icon={faGithub} />
            </FooterIconLink>
          </FooterIconListItem>
          
          <FooterIconListItem>
            <FooterIconLink href="https://dribbble.com/KyleMCD" target="_blank" rel="noopener">
              <AccessibleText>
                Dribbble
              </AccessibleText>
              <FontAwesomeIcon icon={faDribbble} />
            </FooterIconLink>
          </FooterIconListItem>
        </FooterIconList>
      </FooterContainer>
    );
  }
}

export default Footer;
