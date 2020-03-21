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
                Per rimanere sempre aggiornato sugli ultimi articoli, tutorial e recensioni, lascia la tua mail qui sotto.
            </Paragraph>
            <form action="https://lucafpv.us19.list-manage.com/subscribe/post?u=1f9157c09ec4bcd2a7ea723d5&amp;id=d68f59b417" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
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
