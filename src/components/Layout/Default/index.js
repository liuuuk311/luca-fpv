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
                <meta property="og:title" content="Luca Palonca"/>
                <meta property="og:description" content=""/>
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
