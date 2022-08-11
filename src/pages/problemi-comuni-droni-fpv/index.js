
import React from 'react';
import Helmet from 'react-helmet';
import { RisoluzioneProblemiFPVHero } from '../../components/landing/hero';
import { RisoluzioneProblemiFPVGrid } from '../../components/landing/grid';
import { RisoluzioneProblemiFPVSocialProof } from '../../components/landing/social-proof';
import { RisoluzioneProblemiFPVCallToAction } from '../../components/landing/cta';

const Landing = () => {
    return (
        <>
            <Helmet>
                <title>Problemi comuni con Droni FPV</title>
                <meta name="description" content="Ecco la prima guida in italiano per risolvere i problemi più comuni con i droni FPV. Come ad esempio, il drone non si arma o vola male, il segnale video non si vede bene. "/>
            </Helmet>
            <RisoluzioneProblemiFPVHero />
            <RisoluzioneProblemiFPVGrid />
            <RisoluzioneProblemiFPVSocialProof />  
            <RisoluzioneProblemiFPVCallToAction />
        </>
    );
}

export default Landing;
