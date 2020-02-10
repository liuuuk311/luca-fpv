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

const Homepage = () => {
    return (
        <Default>
            <Helmet>
                <title>Kyle McDonald</title>
                <meta name="description" contnet="Peronal site for the Chicago-based Software Engineer"/>
            </Helmet>
            <TopContainer>
                <HomeHero/>
                <HomePostList/>
            </TopContainer>
        </Default>
    );
}

export default Homepage;
