import React from 'react';

import {
    Heading,
} from '../../../utils/fonts';

import {
    Button,
    Field,
    FieldContainer,
    InputGroup,
    Label,
    GroupField,
} from '../../PageStyles/LandingStyles';

import {
    Section,
    Paragraph
} from './styled';

const CallToAction = () => {
    return (
        <Section id="download">
            <Heading>
                Scarica ora la guida gratuita
            </Heading>
            <Paragraph>
                Inserisci il tuo nome e la tua email per ricevere il PDF con le soluzioni ai problemi più comuni nel mondo FPV.
            </Paragraph>
            <form action="https://lucafpv.us19.list-manage.com/subscribe/post?u=1f9157c09ec4bcd2a7ea723d5&amp;id=d68f59b417" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <InputGroup>
                    <Label htmlFor="mce-FNAME">Nome</Label>
                    <FieldContainer>
                        <Field name="FNAME" id="mce-FNAME" required/>
                    </FieldContainer>
                </InputGroup>
                <InputGroup>
                    <Label htmlFor="mce-EMAIL">Email</Label>
                    <FieldContainer>
                        <Field name="EMAIL" id="mce-EMAIL" required/>
                    </FieldContainer>
                </InputGroup>
                <FieldContainer>
                    <Button type="submit">Scarica</Button>
                </FieldContainer>
                <GroupField type="checkbox" value="1" name="group[13000][1]" id="mce-group[13000]-13000-0" checked/>
                    
            </form>
            
        </Section>
    );
}

export default CallToAction;
