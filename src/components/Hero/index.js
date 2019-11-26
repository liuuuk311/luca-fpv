import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faProductHunt,
  faGithub,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons'

import { AccessibleText } from '../ScreenReader'
import Logo from '../Logo'

import {
  HeroContainer,
  HeroList,
  HeroListItem,
  HeroContent,
  HeroTitle,
  HeroDescription,
} from './styled'

class Hero extends Component {
  constructor(props) {
    super(props)
    this.container = React.createRef()
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    let position = window.scrollY / 4.2 / 100
    this.container.current.style.opacity = 1 - position
  }

  render() {
    return (
      <HeroContainer ref={this.container}>
        <HeroList>
          <HeroListItem>
            <a
              href="https://www.twitter.com/designbykyle"
              target="_blank"
              rel="noopener"
            >
              <AccessibleText>Twitter</AccessibleText>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </HeroListItem>

          <HeroListItem>
            <a
              href="https://www.producthunt.com/@hustlinhack"
              target="_blank"
              rel="noopener"
            >
              <AccessibleText>Product Hunt</AccessibleText>
              <FontAwesomeIcon icon={faProductHunt} />
            </a>
          </HeroListItem>

          <HeroListItem>
            <a href="https://github.com/KyleMCD" target="_blank" rel="noopener">
              <AccessibleText>GitHub</AccessibleText>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </HeroListItem>

          <HeroListItem>
            <a
              href="https://dribbble.com/KyleMCD"
              target="_blank"
              rel="noopener"
            >
              <AccessibleText>Dribbble</AccessibleText>
              <FontAwesomeIcon icon={faDribbble} />
            </a>
          </HeroListItem>
        </HeroList>
        <Logo />
        <HeroContent>
          <HeroTitle>
            Business oriented developer with an entrepreneurial spirit
          </HeroTitle>
          <HeroDescription>
            I am a Windy City based developer currently pushing code at Foxtrot.
            In my freetime I enjoy exploring the great outdoors, reading a good
            book, or working on fun projects.
          </HeroDescription>
        </HeroContent>
      </HeroContainer>
    )
  }
}

export default Hero
