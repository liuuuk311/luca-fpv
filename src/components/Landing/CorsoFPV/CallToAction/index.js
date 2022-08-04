import React from 'react';

import {
    Button,
    Field,
    FieldContainer,
    InputGroup,
    Label,
    GroupField,
} from '../../../PageStyles/LandingStyles';

import {
    Section,
    Paragraph,
    Heading,
    SubHeading,
    Container,

} from './styled';


const CallToAction = () => {
    return (
        <Section id="iscriviti">
            <Container>
                    <Heading>
                        Prenota ora il tuo posto nel corso
                    </Heading>
                    <Paragraph>
                        Iscriviti ora e prenota subito il tuo posto per l'unico corso FPV in Italia. Una volta inseriti i dati, verrai contattato dal nostro team per ulteriori dettagli.
                    </Paragraph>
                    <form action="https://lucafpv.us19.list-manage.com/subscribe/post?u=1f9157c09ec4bcd2a7ea723d5&amp;id=d68f59b417&amp;f_id=00a68be4f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                        <InputGroup>
                            <Label htmlFor="mce-FNAME">Nome</Label>
                            <FieldContainer>
                                <Field name="FNAME" id="mce-FNAME" required/>
                            </FieldContainer>
                        </InputGroup>
                        <InputGroup>
                            <Label htmlFor="mce-EMAIL">Email</Label>
                            <FieldContainer>
                                <Field name="EMAIL" id="mce-EMAIL" type="email" required/>
                            </FieldContainer>
                        </InputGroup>
                        <InputGroup>
                            <Label htmlFor="mce-PHONE">Numero di telefono</Label>
                            <FieldContainer>
                                <Field name="PHONE" id="mce-PHONE" type="tel" pattern="[0-9]{9}" required/>
                            </FieldContainer>
                        </InputGroup>
                        <FieldContainer>
                            <Button type="submit">Iscriviti Ora</Button>
                        </FieldContainer>
                        <GroupField type="checkbox" value="1" name="group[13000][4]" id="mce-group[13000]-13000-0" checked/>
                        <Field  type="hidden" name="tags" value="6237349"/>
                    </form>
                    <SubHeading>
                        Ti servono maggiori informazioni?
                    </SubHeading>
                    <Paragraph>
                        Se non hai ancora qualche dubbio o domanda, siamo disponibili per rispondere a tutti i tuoi dubbi al numero <a href="tel:+39351553855">+39 351 553 855</a>
                    </Paragraph>
            </Container>
        </Section>
    );
}

export default CallToAction;
