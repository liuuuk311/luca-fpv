
import React from 'react';
import Helmet from 'react-helmet';
import { OfferteHero } from '../../components/landing/hero';
import { OfferteCallToAction } from '../../components/landing/cta';

const Landing = () => {
    return (
        <>
            <Helmet>
                <title>Offerte</title>
                <meta name="description" content=""/>
            </Helmet>
            <OfferteHero />
            <OfferteCallToAction />
        </>
    );
}

export default Landing;
