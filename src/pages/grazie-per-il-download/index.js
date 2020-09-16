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

const ThankYou = ({ location }) => {
    return (
        <Default
            location={location}
        >
            <Helmet>
                <title>Grazie per il download</title>
                <meta name="description" content="Grazie per il download"/>
            </Helmet>
            <Container>
                <Heading>
                    Controlla la tua email 📩
                </Heading>
                <Paragraph>
                    Grazie per aver scaricato questo PDF gratuito.
                </Paragraph>
                <Paragraph>
                    A breve dovresti ricevere una email con il link per il download 🥳
                </Paragraph>
            </Container>
        </Default>
    );
}

export default ThankYou;
