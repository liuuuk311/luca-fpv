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

const Contact = () => {
    return (
        <Default>
            <Helmet>
                <title>Contact | Kyle McDonald</title>
                <meta name="description" content="Get in contact with Kyle McDonald"/>
            </Helmet>
            <Container>
                <Heading>
                    Get in touch!
                </Heading>
                <Paragraph>
                    Whether it's for a project or just to stop and say "Hi!", use this form.
                </Paragraph>
                <form method="POST" action="https://formspree.io/hello@kylemcd.com">
                    <InputGroup>
                        <Label htmlFor="name">Name</Label>
                        <Field name="name" id="name" type="text" required/>
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor="email">Email</Label>
                        <Field name="email" id="email" type="email" required/>
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor="message">Message</Label>
                        <Textarea name="message" required></Textarea>
                    </InputGroup>
                    <Button type="submit">Let's Go!</Button>
                </form>
            </Container>
        </Default>
    );
}

export default Contact;
