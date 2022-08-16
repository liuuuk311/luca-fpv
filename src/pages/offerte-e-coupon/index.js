
import React from 'react';
import Seo from "../../components/seo"
import { OfferteHero } from '../../components/landing/hero';
import { OfferteCallToAction } from '../../components/landing/cta';

const Landing = () => {
    return (
        <>
            <OfferteHero />
            <OfferteCallToAction />
        </>
    );
}

export default Landing;

export const Head = () => (
    <Seo 
      title="Offerte - Luca FPV" 
    />
  )