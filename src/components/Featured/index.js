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
              BrandSearch
            </FeaturedTitle>
            <FeaturedLink href="https://brand.sh" target="_blank"  rel="noopener">
              Visit Site
            </FeaturedLink>
          </FeaturedTop>
          <FeaturedDescription>
          BrandSearch is a search engine for different brands style guides. The site gives you easy access to their colors, assets, and other key information you should know. This was a weekend project that was released successfully on Product Hunt.
          </FeaturedDescription>
        </FeaturedSite>

        <FeaturedCta>
          <FeaturedCtaTitle>
            If you'd like to hear about my projects and posts subscribe to my newsletter here.
          </FeaturedCtaTitle>
          <form action="https://kylemcd.us19.list-manage.com/subscribe/post?u=5f38c3d669ea51ac7ac7d8d39&amp;id=99fc8e7822" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <FeaturedCtaLabel for="email">Email</FeaturedCtaLabel>
            <FeaturedCtaInput id="email" name="EMAIL" id="mce-EMAIL" required/>
          </form>
          <FeaturedCtaSubtitle>
            Don't worry, no spam here ❤️
          </FeaturedCtaSubtitle>
        </FeaturedCta>

      </FeaturedContainer>
    );
  }
}

export default Featured;
