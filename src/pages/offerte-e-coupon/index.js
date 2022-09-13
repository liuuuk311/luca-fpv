
import React from 'react';
import Seo from "../../components/seo"
import { OfferteHero } from '../../components/landing/hero';
import { OfferteCallToAction } from '../../components/landing/cta';
import { Layout } from '../../components/layout';

const Landing = () => {
    return (
        <Layout>
            <OfferteHero />
            <OfferteCallToAction />
        </Layout>
    );
}

export default Landing;

export const Head = () => (
    <Seo 
      title="Offerte - Luca FPV" 
    />
  )