import React from 'react';

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
            <TopContainer>
                <HomeHero/>
                <HomePostList/>
            </TopContainer>
        </Default>
    );
}

export default Homepage;
