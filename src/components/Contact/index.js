import React, { Component } from 'react';

import {
  ContactContainer,
  ContactFormContainer,
  ContactTitle,
  ContactLabel,
  ContactInput,
  ContactTextArea,
  ContactButton
} from './styled';

class Contact extends Component {
  render() {
    return (
      <ContactContainer>
        <ContactFormContainer>
          <ContactTitle>
            Get in touch
          </ContactTitle>
          <form method="POST" action="https://formspree.io/hello@kylemcd.com">
            <ContactLabel htmlFor="name">Name</ContactLabel>
            <ContactInput name="name" id="name" type="text" required/>
            <ContactLabel htmlFor="email">Email</ContactLabel>
            <ContactInput name="email" id="email" type="email" required/>
            <ContactLabel htmlFor="message">Message</ContactLabel>
            <ContactTextArea name="message" required></ContactTextArea>
            <ContactButton type="submit">Let's Go!</ContactButton>
          </form>
        </ContactFormContainer>
      </ContactContainer>
    );
  }
}

export default Contact;
