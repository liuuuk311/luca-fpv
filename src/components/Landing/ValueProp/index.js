import React from 'react';

import {
    Section,
    Container,
    MainMessage,
    Heading,
    Paragraph,
    MainPhoto
} from './styled';

import {
    Button,
} from '../../PageStyles/LandingStyles';

const ValueProp = () => {
    return (
        <Section>
            <Container>
                <MainMessage>
                    <Heading>
                        Le soluzioni ai tuoi problemi!
                    </Heading>
                    <Paragraph>
                        La prima guida in Italiano per risolvere i problemi che puoi avere dopo aver costruito un drone FPV.
                    </Paragraph>
                    <a href="#download"><Button>Scarica gratuitamente</Button></a>
                </MainMessage>
                <MainPhoto/>
            </Container>
        </Section>
    );
}

export default ValueProp;
