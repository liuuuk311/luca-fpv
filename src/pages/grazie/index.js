import React from 'react';
import Helmet from 'react-helmet';

import {
    Default,
    LastVideo
} from '../../components';

import {
    Container,
    Heading,
    Paragraph,
} from '../../components/PageStyles/ContactStyles';

const ThankYou = ({ location }) => {
    return (
        <Default
            location={location}
        >
            <Helmet>
                <title>Grazie - Luca FPV</title>
                <meta name="description" content="Grazie"/>
            </Helmet>
            <Container>
                <Heading>
                    Controlla la tua email 📩
                </Heading>
                <Paragraph>
                    A breve riceverai una email con ulteriori istruzioni 🥳
                </Paragraph>
                <br/><br/>
                <Paragraph>
                    Mentre aspetti, potresti vedere il mio ultimo video 🚀
                </Paragraph>
                <LastVideo/>
            </Container>
        </Default>
    );
}

export default ThankYou;
