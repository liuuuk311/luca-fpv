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
                <meta name="description" content="Contatta Luca"/>
            </Helmet>
            
                <ValueProp/>
                <ProductBenefit/>
                <ProductFeature/>
                <CallToAction/>
        </Default>
    );
}

export default Landing;
