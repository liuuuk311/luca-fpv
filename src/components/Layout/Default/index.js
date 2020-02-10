import React from 'react';
import Helmet from 'react-helmet';

import {
    Navigation,
    Footer
} from '../../../components';

const Default = props => {
    const { children } = props;
    return (
        <div>
            <Helmet>
                <html lang="en" />
                <meta charset="UTF-8" />
            </Helmet>
            <Navigation/>
            {children}
            <Footer/>
        </div>
    );
}

export default Default;
