import React from 'react';
import Helmet from 'react-helmet';

import {
    Default
} from '../../components';

import {
  ValueProp,
  ProductBenefit,
  ProductFeature,
  CallToAction,
} from '../../components/Landing'


const Landing = ({ location }) => {
    return (
        <Default
            location={location}
        >
            <Helmet>
                <title>Problemi comuni con Droni FPV</title>
                <meta name="description" content="Ecco la prima guida in italiano per risolvere i problemi più comuni con i droni FPV. Come ad esempio, il drone non si arma o vola male, il segnale video non si vede bene. "/>
            </Helmet>
            
                <ValueProp/>
                <ProductBenefit/>
                <ProductFeature/>
                <CallToAction/>
        </Default>
    );
}

export default Landing;
