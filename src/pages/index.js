import React from 'react';

import {
    HomeHero,
    HomePostList,
    Navigation
} from '../components';

import {
    TopContainer
} from './styled';

const Homepage = () => {
    return (
        <div>
            <Navigation/>
            <TopContainer>
                <HomeHero/>
                <HomePostList/>
            </TopContainer>
        </div>
    );
}

export default Homepage;
