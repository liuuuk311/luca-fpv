import React from 'react';
import Helmet from 'react-helmet';


import {
    Default,
} from '../../components';

import {
    Deals 
} from '../../components/Landing';

const Landing = ({ location }) => {
    var months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
    var today = new Date();
    var date = months[today.getMonth()] + " " + today.getFullYear();

    return (
        <Default
            location={location}
        >
            <Helmet>
                <title>Offerte e Coupon per Banggood | {date}</title>
                <meta name="description" content="Risparmia soldi usando i migliori coupon per Banggood per prodotti FPV e non solo. Rimani sempre aggiornato con le migliori offerte per modelli radiocomandati."/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Helmet>
            <Deals/>
        </Default>
    );
}

export default Landing;