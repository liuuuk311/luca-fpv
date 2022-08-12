import React from 'react';
import Helmet from 'react-helmet';
import { CorsoFPVHero } from '../../components/landing/hero';
import { CorsoFPVGrid } from '../../components/landing/grid';
import { CorsoFPVFaq, CorsoFPVProgramma } from '../../components/landing/faq';
import { CorsoFPVVideo } from '../../components/landing/video';
import { CorsoFPVTestimonials } from '../../components/landing/testimonials';
import { CorsoFPVCallToAction } from '../../components/landing/cta';

const Landing = () => {
    return (
        <>
            <Helmet>
                <title>Corso FPV</title>
                <meta name="description" 
                content="Cinema e la comunicazione fanno sempre maggior uso di droni FPV, tuttavia la difficoltà di pilotaggio di questi droni, crea una barriera all'ingresso che questo corso FPV cerca di abbattere."/>
            </Helmet>
            <CorsoFPVHero />
            <CorsoFPVGrid />
            <CorsoFPVProgramma />
            <CorsoFPVVideo />
            <CorsoFPVTestimonials />
            <CorsoFPVFaq /> 
            <CorsoFPVCallToAction/>
        </>
    );
}


export default Landing;
