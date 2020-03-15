import React from 'react';
import Helmet from 'react-helmet';
import {
    HomeHero,
    HomePostList,
    Default
} from '../components';

import {
    TopContainer
} from '../components/PageStyles/HomeStyles';

const Homepage = ({ location }) => {
    return (
        <Default
            location={location}
        >
            <Helmet>
                <title>Luca FPV</title>
                <meta name="description" content="Luca FPV è il blog di Luca Palonca"/>
            </Helmet>
            <TopContainer>
                <HomeHero/>
                <HomePostList/>
            </TopContainer>
        </Default>
    );
}

export default Homepage;
