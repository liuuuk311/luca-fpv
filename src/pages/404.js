import React from 'react';
import Helmet from 'react-helmet';
import {
    Default
} from '../components';

import {
    TopContainer,
    Heading,
    Preview,
    Container,
    Link
} from '../components/PageStyles/404Styles.js';

const Homepage = ({ location }) => {
    return (
        <Default
            location={location}
        >
            <Helmet>
                <title>404 - Luca FPV</title>
                <meta name="description" content="Articoli utili su Droni, Quadricotteri, Mini Quad, Elettronica e Software. Guide, tutorial e recensioni sul mondo FPV. Il punto di riferimento per i piloti Itaiani FPV."/>
            </Helmet>
            <TopContainer>
                <Container>
                    <Heading>
                        Sembra che questa pagina non esista
                    </Heading>
                    <Preview>
                        Prova a sintonizzarti un'altra frequenza, oppure <Link href='/'>RTH</Link>
                    </Preview>
                </Container>
            </TopContainer>
        </Default>
    );
}

export default Homepage;
