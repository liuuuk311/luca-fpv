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
                <title>Luca FPV - Vola in prima persona</title>
                <meta name="description" content="Articoli utili su Droni, Quadricotteri, Mini Quad, Elettronica e Software. Guide, tutorial e recensioni sul mondo FPV. Il punto di riferimento per i piloti Itaiani FPV."/>
            </Helmet>
            <TopContainer>
                <HomeHero/>
                <HomePostList/>
            </TopContainer>
        </Default>
    );
}

export default Homepage;
