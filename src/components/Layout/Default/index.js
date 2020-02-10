import React from 'react';

import {
    Navigation,
    Footer
} from '../../../components';

const Default = props => {
    const { children } = props;
    return (
        <div>
            <Navigation/>
            {children}
            <Footer/>
        </div>
    );
}

export default Default;
