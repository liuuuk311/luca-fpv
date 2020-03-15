import React from 'react';
import Helmet from 'react-helmet';

import {
    Default
} from '../../components';

import {
    Container,
    Heading,
    Paragraph,
    InputGroup,
    Field,
    Label,
    Button,
    Textarea
} from '../../components/PageStyles/ContactStyles';

const Contact = ({ location }) => {
    return (
        <Default
            location={location}
        >
            <Helmet>
                <title>Contattami | Luca FPV</title>
                <meta name="description" content="Contatta Luca"/>
            </Helmet>
            <Container>
                <Heading>
                    Scrivimi!
                </Heading>
                <Paragraph>
                    Se vuoi collaborare, farmi una domanda oppure semplicemente salutarmi, riempi il form 👇
                </Paragraph>
                <form method="POST" action="">
                    <InputGroup>
                        <Label htmlFor="name">Nome</Label>
                        <Field name="name" id="name" type="text" required/>
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor="email">Email</Label>
                        <Field name="email" id="email" type="email" required/>
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor="message">Messaggio</Label>
                        <Textarea name="message" required></Textarea>
                    </InputGroup>
                    <Button type="submit">Invia!</Button>
                </form>
            </Container>
        </Default>
    );
}

export default Contact;
