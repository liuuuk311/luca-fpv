import React, { Component } from 'react';

import {
  FeaturedContainer,
  FeaturedSite,
  FeaturedTop,
  FeaturedTitle,
  FeaturedLink,
  FeaturedDescription,
  FeaturedCta,
  FeaturedCtaTitle,
  FeaturedCtaLabel,
  FeaturedCtaInput,
  FeaturedCtaButton,
  FeaturedCtaSubtitle,
} from './styled';

class Featured extends Component {
  render() {
    return (
      <FeaturedContainer>

        <FeaturedSite>
          <FeaturedTop>
            <FeaturedTitle>
              IronMic
            </FeaturedTitle>
            <FeaturedLink href="https://ironmic.fm" target="_blank"  rel="noopener">
              Visit Site
            </FeaturedLink>
          </FeaturedTop>
          <FeaturedDescription>
            IronMic makes it super easy to create a website for your podcast. Get started with just your podcast's RSS feed. You can also add host info, links to your social networks, and podcast platforms. Top it off and add a custom domain to truly personalize your site.
          </FeaturedDescription>
        </FeaturedSite>

        <FeaturedSite>
          <FeaturedTop>
            <FeaturedTitle>
              IronMic
            </FeaturedTitle>
            <FeaturedLink href="https://ironmic.fm" target="_blank"  rel="noopener">
              Visit Site
            </FeaturedLink>
          </FeaturedTop>
          <FeaturedDescription>
            IronMic makes it super easy to create a website for your podcast. Get started with just your podcast's RSS feed. You can also add host info, links to your social networks, and podcast platforms. Top it off and add a custom domain to truly personalize your site.
          </FeaturedDescription>
        </FeaturedSite>

        <FeaturedCta>
          <FeaturedCtaTitle>
            Join my newsletter
          </FeaturedCtaTitle>
          <form>
            <FeaturedCtaLabel for="email">Email</FeaturedCtaLabel>
            <FeaturedCtaInput id="email"/>
          </form>
          <FeaturedCtaSubtitle>
            Don't worry, no spam ever here
          </FeaturedCtaSubtitle>
        </FeaturedCta>

      </FeaturedContainer>
    );
  }
}

export default Featured;
