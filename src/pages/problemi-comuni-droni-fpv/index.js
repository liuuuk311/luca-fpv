
import React from 'react';

import Seo from "../../components/seo"
import { RisoluzioneProblemiFPVHero } from '../../components/landing/hero';
import { RisoluzioneProblemiFPVGrid } from '../../components/landing/grid';
import { RisoluzioneProblemiFPVSocialProof } from '../../components/landing/social-proof';
import { RisoluzioneProblemiFPVCallToAction } from '../../components/landing/cta';
import { Layout } from '../../components/layout';

const Landing = () => {
    return (
        <Layout>
            <RisoluzioneProblemiFPVHero />
            <RisoluzioneProblemiFPVGrid />
            <RisoluzioneProblemiFPVSocialProof />  
            <RisoluzioneProblemiFPVCallToAction />
        </Layout>
    );
}

export default Landing;

export const Head = () => (
    <Seo 
      title="Problemi comuni con Droni FPV - Luca FPV" 
      description="Ecco la prima guida in italiano per risolvere i problemi più comuni con i droni FPV. Come ad esempio, il drone non si arma o vola male, il segnale video non si vede bene."
    />
  )