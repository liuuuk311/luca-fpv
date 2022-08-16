import React from 'react';
import Seo from "../../components/seo"
import { CorsoFPVHero } from '../../components/landing/hero';
import { CorsoFPVGrid } from '../../components/landing/grid';
import { CorsoFPVFaq, CorsoFPVProgramma } from '../../components/landing/faq';
import { CorsoFPVVideo } from '../../components/landing/video';
import { CorsoFPVTestimonials } from '../../components/landing/testimonials';
import { CorsoFPVCallToAction } from '../../components/landing/cta';

const Landing = () => {
    return (
        <>
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

export const Head = () => (
    <Seo 
      title="Corso FPV - Luca FPV" 
      description="Cinema e la comunicazione fanno sempre maggior uso di droni FPV, tuttavia la difficoltà di pilotaggio di questi droni, crea una barriera all'ingresso che questo corso FPV cerca di abbattere."
    />
  )