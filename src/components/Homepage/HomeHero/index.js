import React from 'react';

import {
    Container,
    Avatar,
    Heading,
    SubHeading,
    Paragraph,
} from './styled';

const HomeHero = () => {
    return (
        <Container>
          <Avatar src='/luca_new.jpeg' width={110} height={110} alt={"Luca FPV"}/>
            <Heading>
                Ciao!
            </Heading>
            <Paragraph>
                Mi chiamo Luca e sono un appassionato di droni FPV. Questa passione mi ha portato anche a creare la prima community italiana di FPV chiamata <strong>NorthFPV</strong>. 
                <br/><br/>
                Lo scopo di questa community è quello di condividere una passione e aiutarsi a vicenda. Sono molto contento che la community stia crescendo rapidamente, entra anche tu a farne parte!
            </Paragraph>
            <SubHeading>Cerchi qualcosa di specifico?</SubHeading>
            <div id="search"></div>
            <script type="text/javascript" dangerouslySetInnerHTML={{
                __html: `
                    algoliasearchNetlify({
                    appId: 'G0M23X5AHA',
                    apiKey: 'f64ebf0353bcad837657a655e4523786',
                    siteId: 'c3f13e8c-97b2-4e0f-b137-9df20f9f0153',
                    branch: 'master',
                    selector: '#search',
                    placeholder: 'Cerca...',
                    detached: false,
                    theme: {
                        mark: '#eda550',                                 // Color of the matching content
                        background: '#fff',                        // Background Color of the input and the panel
                        selected: '#f5f5fa',                          // Background Color of the selected item
                        text: '#23263b',                              // Color of the title of the items
                        colorSourceIcon: '#d6d6e7'                    // Color of the icon on the left of results
                    }
                });
                ` }} />
        </Container>
    );
}

export default HomeHero;
