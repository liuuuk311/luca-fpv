import React from 'react';
import Helmet from 'react-helmet';

import {
    Default
} from '../../components';

import {
    Container,
    Heading,
    Paragraph,
} from '../../components/PageStyles/ContactStyles';

const ThankYouForDownloading = ({ location }) => {
    return (
        <Default
            location={location}
        >
            <Helmet>
                <title>Grazie per il Download - Luca FPV</title>
                <meta name="description" content="Grazie per il Download"/>
            </Helmet>
            <Container>
                <Heading>
                    Controlla la tua email 📩
                </Heading>
                <Paragraph>
                    Grazie per aver scaricato questa risorsa gratuita.
                </Paragraph>
                <Paragraph>
                    A breve riceverai una email con il link al tuo PDF 🥳
                </Paragraph>
            </Container>
        </Default>
    );
}

export default ThankYouForDownloading;
