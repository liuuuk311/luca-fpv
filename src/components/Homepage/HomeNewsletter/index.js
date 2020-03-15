import React from 'react';

import {
    Container,
    Heading,
    Paragraph,
    Label,
    FieldContainer,
    Field,
    Button
} from './styled';

const HomeNewsletter = () => {
    return (
        <Container>
            <Heading>
                Iscriviti alla newsletter
            </Heading>
            <Paragraph>
                Per rimanere sempre aggiornato sugli ultimi articoli, tutorial e recensioni, lascia la tua mail sotto.
            </Paragraph>
            <form action="" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <Label htmlFor="mce-EMAIL">Email</Label>
                <FieldContainer>
                    <Field name="EMAIL" id="mce-EMAIL" required/>
                    <Button type="submit">Iscriviti!</Button>
                </FieldContainer>
            </form>
        </Container>
    );
}

export default HomeNewsletter;
