import React from 'react';
import Helmet from 'react-helmet';

import {
    Navigation,
    Footer
} from '../../../components';

const Default = props => {
    const { children, location } = props;
    const url = location.href ? location.href : '';

    return (
        <div>
            <Helmet>
                <html lang="en" />
                <meta charset="UTF-8" />
                <meta property="og:title" content="Luca FPV"/>
                <meta property="og:description" content="Articoli utili su Droni, Quadricotteri, Mini Quad, Elettronica e Software. Guide, tutorial e recensioni sul mondo FPV. Il punto di riferimento per i piloti Itaiani FPV."/>
                {/* <meta property="og:image" content="http://lucafpv.com/avatar.png"/> */}
                <meta property="og:url" content={url}/>
            </Helmet>
            <Navigation/>
            <div>
            {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Default;
