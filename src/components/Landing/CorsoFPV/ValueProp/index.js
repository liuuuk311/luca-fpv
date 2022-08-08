import React from 'react';

import {
    Section,
    Container,
    MainMessage,
    Heading,
    Paragraph,
    MainPhoto,
    SubHeading
} from './styled';

import {
    Button,
} from '../../../PageStyles/LandingStyles';

const ValueProp = () => {
    return (
        <Section>
            <Container>
                <MainMessage>
                    <Heading>
                        Diventa un pilota FPV
                    </Heading>
                    <SubHeading>
                        La seconda edizione dell'unico corso FPV in Italia. 
                    </SubHeading>
                    <Paragraph>
                        Il corso FPVAcademy è organizzato in collaborazione tra NorthFPV (di cui sono co-fondatore) e Flyan, parte di ItalDrone.
                    </Paragraph>
                    <a href="#iscriviti"><Button>Iscriviti ora</Button></a>
                </MainMessage>
                <MainPhoto/>
            </Container>
        </Section>
    );
}

export default ValueProp;
